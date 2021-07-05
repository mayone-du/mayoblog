export type Blog = {
  id: string;
  title: string;
  slug: string;
  description: string;
  body: string;
  category: string;
  tags: string[] | [];
};

export type Blogs = {
  contents: Blog[];
};

export type Category = {
  name: string;
};

export type Categories = Category[];
