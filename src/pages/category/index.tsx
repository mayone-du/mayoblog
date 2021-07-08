import type { NextPage } from "next";
import { Layout } from "src/components/layouts/Layout";

const CategoryIndexPage: NextPage = () => {
  return <Layout meta={{ pageName: "カテゴリー" }}>category</Layout>;
};
export default CategoryIndexPage;
