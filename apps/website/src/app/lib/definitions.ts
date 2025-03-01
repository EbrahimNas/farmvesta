export type Customer = {
  id: number;
  name: string;
  email: string;
  image_url: string;
};

export type Blog = {
  id: string;
  title: string;
  description: string;
  content: string;
  content2?: string;
  content3?: string;
  content4?: string;
  content5?: string;
  content6?: string;
  content7?: string;
  author: string;
  date: string;
  image: string;
  slug: string;
};

export type AboutSection = {
  title: string;
  content: string;
  content2?: string;
  content3?: string;
  reverse?: boolean;
  italic?: boolean;
};
  