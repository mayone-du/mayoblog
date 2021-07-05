import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { Layout } from "src/components/layouts/Layout";
import { ThemeChanger } from "src/components/ThemeChanger";
import type { Blogs } from "src/types/types";

import { client } from "../libs/client/client";

export const getStaticProps: GetStaticProps = async () => {
  const data: Blogs = await client.get({ endpoint: "blogs" });

  return {
    props: {
      blogs: data,
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
          {props.blogs.contents.map((blog, index) => {
            return (
              <li className="my-8 border" key={index}>
                <Link href={`blogs/${blog.slug}`}>
                  <a>
                    <h3 className="text-lg font-bold">{blog.title}</h3>
                  </a>
                </Link>
                {/* eslint-disable-next-line @typescript-eslint/naming-convention */}
                {/* <article dangerouslySetInnerHTML={{ __html: blog.body }}></article> */}
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
