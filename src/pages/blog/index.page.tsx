import type { GetStaticProps, NextPage } from "next";
import { BlogCard } from "src/components/blogs/BlogCard";
import { Layout } from "src/components/layouts/Layout";
import { Headline1 } from "src/components/utils/Headline1";
import { client } from "src/libs/client/client";
import type { Blogs } from "src/types/types";

export const getStaticProps: GetStaticProps = async () => {
  const blogs: Blogs = await client.get({ endpoint: "blogs" });

  return {
    props: {
      blogs: blogs,
    },
    revalidate: 60 * 60,
  };
};

type Props = {
  blogs: Blogs;
};
const BlogIndexPage: NextPage<Props> = (props) => {
  return (
    <Layout meta={{ pageName: "ブログ一覧" }} breadCrumb={["ブログ"]}>
      <Headline1 text="ブログ一覧" />
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

export default BlogIndexPage;
