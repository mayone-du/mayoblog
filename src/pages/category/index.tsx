import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { Layout } from "src/components/layouts/Layout";
import { Headline1 } from "src/components/utils/Headline1";
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
      <Headline1 text="カテゴリー一覧" />
      <ul>
        {props.categories.contents.map((category, index) => {
          return (
            <li key={index}>
              <Link href={`/category/${category.slug}`}>
                <a className="text-blue-600 underline">{category.name}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
};

export default TagIndexPage;
