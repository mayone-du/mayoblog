import type { GetStaticProps, NextPage } from "next";
// import Link from "next/link";
import { Layout } from "src/components/layouts/Layout";
import { ThemeChanger } from "src/components/ThemeChanger";
import type { Blogs } from "src/types/types";

import { client } from "../libs/client/client";
// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps: GetStaticProps = async () => {
  const data: any = await client.get({ endpoint: "blogs" });

  return {
    props: {
      blogs: data.contents,
    },
  };
};

type Props = {
  blogs: Blogs;
};
const Index: NextPage<Props> = (props) => {
  return (
    <Layout metaTitle="Index Page">
      <div>
        <ul>
          {props.blogs.map((blog, index) => {
            return (
              <li key={index}>
                <div>{blog.title}</div>
                <div> {blog.body} </div>
                {/* eslint-disable-next-line @typescript-eslint/naming-convention */}
                <div dangerouslySetInnerHTML={{ __html: blog.body }}></div>
              </li>
            );
          })}
        </ul>
      </div>
      <ThemeChanger />
    </Layout>
  );
};

export default Index;
