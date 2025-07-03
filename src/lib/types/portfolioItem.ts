// Sanity CMS base fields
interface SanityBase {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
}

// Sanity system fields
interface SanitySystem {
  base: Record<string, any>;
}

// Image object structure based on Sanity image configuration
interface SanityImage {
  _key: string;
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
}

// Portfolio item interface
export interface PortfolioItem extends SanityBase {
  _system?: SanitySystem;
  date: string;
  description: string;
  image: SanityImage[];
  title: string;
  type: string[];
}

// Array type for multiple portfolio items
export type PortfolioItems = PortfolioItem[];