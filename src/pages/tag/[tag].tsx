import "highlight.js/styles/hybrid.css";

import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { BlogCard } from "src/components/blogs/BlogCard";
import { Layout } from "src/components/layouts/Layout";
import { Headline1 } from "src/components/utils/Headline1";
import { client } from "src/libs/client/client";
import type { Blogs, Tags } from "src/types/types";

export const getStaticPaths: GetStaticPaths = async () => {
  const tags: Tags = await client.get({ endpoint: "tags" });

  const paths = tags.contents.map((tag) => {
    return `/tag/${tag.slug}`;
  });

  return { paths: paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const blogs: Blogs = await client.get({
    endpoint: `blogs?filters=tags[contains]${context.params?.tag}`,
  });

  return {
    props: { blogs: blogs, tag: context.params?.tag },
  };
};
type Props = {
  blogs: Blogs;
  tag: string;
};
const BlogDetailPage: NextPage<Props> = (props) => {
  return (
    <Layout
      meta={{
        pageName: "",
      }}
    >
      <Headline1 text={`${props.tag}のタグ一覧`} />

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
