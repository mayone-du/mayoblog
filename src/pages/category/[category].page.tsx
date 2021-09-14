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

  return { paths: paths, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const blogs: Blogs = await client.get({
    endpoint: `blogs?filters=category[equals]${context.params?.category}`,
  });

  return {
    props: { blogs: blogs, category: context.params?.category },
  };
};
type Props = {
  blogs: Blogs;
  category: string;
};
const BlogDetailPage: NextPage<Props> = (props) => {
  return (
    <Layout
      meta={{
        pageName: "",
      }}
      breadCrumb={["カテゴリー", `${props.category}`]}
    >
      <Headline1 text={`${props.category}のカテゴリー一覧`} />
      {props.blogs.contents.length === 0 ? (
        <div>記事がありませんでした。</div>
      ) : (
        <ul>
          {props.blogs.contents.map((blog, index) => {
            return (
              <li key={index}>
                <BlogCard blog={blog} />
              </li>
            );
          })}
        </ul>
      )}
    </Layout>
  );
};
export default BlogDetailPage;
