// Query for primary and footer menus
export const GET_MENUS_QUERY = `
  query GetMenus {
    menus {
      nodes {
        id
        name
        slug
        menuItems {
          nodes {
            id
            label
            url
            path
            parentId
          }
        }
      }
    }
  }
`;

// Query for standard WordPress pages
export const GET_PAGE_BY_SLUG_QUERY = `
  query GetPageBySlug($uri: String!) {
    nodeByUri(uri: $uri) {
      ... on Page {
        id
        title
        slug
        content
        isFrontPage
        seo {
          title
          description
          fullHead
        }
      }
    }
  }
`;

// Query for all static page URIs (for static site generation)
export const GET_ALL_PAGES_QUERY = `
  query GetAllPages {
    pages(first: 1000) {
      nodes {
        uri
        slug
        isFrontPage
      }
    }
  }
`;