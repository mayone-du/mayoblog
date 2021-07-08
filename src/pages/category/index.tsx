import type { GetStaticProps, NextPage } from "next";
import { Layout } from "src/components/layouts/Layout";
import { client } from "src/libs/client/client";
import type { Categories } from "src/types/types";

export const getStaticProps: GetStaticProps = async () => {
  const categories: Categories = await client.get({ endpoint: "categories" });

  return {
    props: {
      categories: categories,
    },
    revalidate: 60 * 60,
  };
};
type Props = {
  categories: Categories;
};
const TagIndexPage: NextPage<Props> = (props) => {
  return (
    <Layout meta={{ pageName: "カテゴリー一覧" }}>
      <h1>カテゴリー一覧</h1>
      <ul>
        {props.categories.contents.map((tag, index) => {
          return <li key={index}>{tag.name}</li>;
        })}
      </ul>
    </Layout>
  );
};

export default TagIndexPage;
