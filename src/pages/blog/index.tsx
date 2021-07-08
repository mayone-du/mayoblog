import type { GetStaticProps, NextPage } from "next";
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

const BlogIndexPage: NextPage = () => {
  return (
    <Layout meta={{ pageName: "ブログ一覧" }}>
      <Headline1 text="ブログ一覧" />
    </Layout>
  );
};

export default BlogIndexPage;
