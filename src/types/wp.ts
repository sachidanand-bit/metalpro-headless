export interface RankMathSeo {
  title: string;
  description: string;
  canonicalUrl: string;
  fullHead: string;
}

export interface FaqCategory {
  name: string;
  slug: string;
}

export interface FaqNode {
  id: string;
  title: string;
  content: string;
  faqCategories?: {
    nodes: FaqCategory[];
  };
}

export interface PostNode {
  title: string;
  slug: string;
  content: string;
  seo: RankMathSeo;
}