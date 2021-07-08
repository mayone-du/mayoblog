export type Category = {
  name: string;
};

export type Categories = { contents: Category[] };

export type Tag = {
  name: string;
};

export type Tags = { contents: Tag[] };

export type Blog = {
  id: string;
  title: string;
  slug: string;
  description: string;
  image: {
    url: string;
    height: number;
    width: number;
  };
  body: string;
  category: Category;
  tags: { name: string }[];
  createdAt: string;
};

export type Blogs = {
  contents: Blog[];
};
