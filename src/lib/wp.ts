import type { FaqNode, PostNode } from '../types/wp';

const GRAPHQL_URL = (import.meta as any).env.WPGRAPHQL_URL || 'https://cxm.ihg.mybluehost.me/website_e18f7bf7/graphql';

async function fetchAPI<T>(query: string, variables?: Record<string, any>): Promise<T> {
  const res = await fetch(GRAPHQL_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error('Failed to fetch WordPress GraphQL API');
  }
  return json.data;
}

export async function getFAQs(): Promise<FaqNode[]> {
  const data = await fetchAPI<{ faqs: { nodes: FaqNode[] } }>(`
    query GetFAQs {
      faqs(first: 100) {
        nodes {
          id
          title
          content
          faqCategories {
            nodes {
              name
              slug
            }
          }
        }
      }
    }
  `);
  return data.faqs.nodes;
}

export async function getPosts(): Promise<PostNode[]> {
  const data = await fetchAPI<{ posts: { nodes: PostNode[] } }>(`
    query GetPosts {
      posts(first: 100) {
        nodes {
          title
          slug
          seo {
            title
            description
            canonicalUrl
            fullHead
          }
        }
      }
    }
  `);
  return data.posts.nodes;
}

export async function getAllPostSlugs(): Promise<string[]> {
  const data = await fetchAPI<{ posts: { nodes: { slug: string }[] } }>(`
    query GetAllSlugs {
      posts(first: 1000) {
        nodes {
          slug
        }
      }
    }
  `);
  return data.posts.nodes.map((post) => post.slug);
}

export async function getPostBySlug(slug: string): Promise<PostNode | null> {
  const data = await fetchAPI<{ post: PostNode }>(`
    query GetPostBySlug($id: ID!) {
      post(id: $id, idType: SLUG) {
        title
        slug
        content
        seo {
          title
          description
          canonicalUrl
          fullHead
        }
      }
    }
  `, { id: slug });
  return data.post;
}