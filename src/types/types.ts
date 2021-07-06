export type Blog = {
  id: string;
  title: string;
  slug: string;
  description: string;
  image: string;
  body: string;
  category: string;
  tags: string[] | [];
  createdAt: string;
};

export type Blogs = {
  contents: Blog[];
};

export type Category = {
  name: string;
};

export type Categories = Category[];

export type Tag = {
  name: string;
};

export type Tags = {
  contents: Tag[];
};
