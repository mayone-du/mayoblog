import type { NextPage } from "next";
import { Layout } from "src/components/layouts/Layout";

const BlogIndexPage: NextPage = () => {
  return <Layout meta={{ pageName: "ブログ一覧" }}>ぶろぐ</Layout>;
};

export default BlogIndexPage;
