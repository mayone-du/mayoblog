import "highlight.js/styles/hybrid.css";

import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { BlogCard } from "src/components/blogs/BlogCard";
import { Layout } from "src/components/layouts/Layout";
import { Headline1 } from "src/components/utils/Headline1";
import { client } from "src/libs/client/client";
import type { Blogs, Categories } from "src/types/types";

export const getStaticPaths: GetStaticPaths = async () => {
  const categories: Categories = await client.get({ endpoint: "categories" });

  const paths = categories.contents.map((category) => {
    return `/category/${category.slug}`;
  });

  return { paths: paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const blogs: Blogs = await client.get({
    endpoint: `blogs?filters=category[equals]${context.params?.category}`,
  });
  return {
    props: { blogs: blogs },
  };
};
type Props = {
  blogs: Blogs;
};
const BlogDetailPage: NextPage<Props> = (props) => {
  return (
    <Layout
      meta={{
        pageName: "",
      }}
    >
      <Headline1 text="カテゴリー" />

      <ul>
        {props.blogs.contents.map((blog, index) => {
          return (
            <li key={index}>
              <BlogCard blog={blog} />
            </li>
          );
        })}
      </ul>
    </Layout>
  );
};
export default BlogDetailPage;
