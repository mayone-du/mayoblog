import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { Layout } from "src/components/layouts/Layout";
import { Headline1 } from "src/components/utils/Headline1";
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
      <Headline1 text="タグ一覧" />
      <ul>
        {props.tags.contents.map((tag, index) => {
          return (
            <li key={index}>
              <Link href={`/tag/${tag.slug}`}>
                <a className="text-blue-600 underline">{tag.name}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
};

export default TagIndexPage;
