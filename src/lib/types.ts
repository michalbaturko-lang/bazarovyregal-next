export interface Product {
  id: number;
  code: string;
  name: string;
  slug: string;
  price: number;
  priceOrig: number;
  height: number;
  width: number;
  depth: number;
  color: string;
  surface: string;
  shelves: number;
  capacity: number;
  capacityPerShelf: number;
  image: string;
  imageAlt?: string;
  seoUrl: string;
  stock: number;
  sold7days: number;
  bestseller?: boolean;
  category?: string;
  description?: string;
}

export interface SeoPage {
  slug: string;
  title: string;
  h1: string;
  metaDescription: string;
  content: string;
  category: string;
  keywords: string[];
  relatedProductFilter?: {
    color?: string;
    surface?: string;
    minHeight?: number;
    maxHeight?: number;
    minCapacity?: number;
    usage?: string;
  };
}

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  image: string;
  date: string;
  readTime: number;
}

export interface GlossaryTerm {
  id: number;
  term: string;
  definition: string;
  letter: string;
}

export interface ChatTrigger {
  id: string;
  type: "time" | "url" | "scroll" | "exit_intent" | "event" | "revisit";
  condition: {
    delay?: number;
    urlPattern?: string;
    scrollDepth?: number;
    eventName?: string;
    maxShows?: number;
    cooldown?: number;
  };
  message: string;
  priority: number;
  enabled: boolean;
}
