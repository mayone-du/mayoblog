import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { Layout } from "src/components/layouts/Layout";
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
                  <a className="flex items-center p-4">
                    <img src={blog.image} className="block object-cover" alt="" />
                    <h3 className="text-lg font-bold">{blog.title}</h3>
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </Layout>
  );
};

export default Index;
