import type { GetStaticProps, NextPage } from "next";
import { Layout } from "src/components/layouts/Layout";
import { client } from "src/libs/client/client";
import type { Tags } from "src/types/types";

export const getStaticProps: GetStaticProps = async () => {
  const tags: Tags = await client.get({ endpoint: "tags" });

  return {
    props: {
      tags: tags,
    },
    revalidate: 60 * 60,
  };
};
type Props = {
  tags: Tags;
};
const TagIndexPage: NextPage<Props> = (props) => {
  return (
    <Layout meta={{ pageName: "タグ一覧" }}>
      <h1>タグ一覧</h1>
      <ul>
        {props.tags.contents.map((tag, index) => {
          return <li key={index}>{tag.name}</li>;
        })}
      </ul>
    </Layout>
  );
};

export default TagIndexPage;
