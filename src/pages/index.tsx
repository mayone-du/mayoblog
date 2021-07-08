import type { GetStaticProps, NextPage } from "next";
import { BlogCard } from "src/components/blogs/BlogCard";
import { Layout } from "src/components/layouts/Layout";
import { Headline1 } from "src/components/utils/Headline1";
import type { Blogs } from "src/types/types";

import { client } from "../libs/client/client";

export const getStaticProps: GetStaticProps = async () => {
  const blogs: Blogs = await client.get({ endpoint: "blogs" });

  return {
    props: {
      blogs: blogs,
    },
    revalidate: 60 * 60,
  };
};

type Props = {
  blogs: Blogs;
};
const Index: NextPage<Props> = (props) => {
  return (
    <Layout>
      <div>
        <Headline1 text="まよブログ" />
        <ul>
          {props.blogs.contents.map((blog, index) => {
            return (
              <li key={index}>
                <BlogCard blog={blog} />
              </li>
            );
          })}
        </ul>
      </div>
    </Layout>
  );
};

export default Index;
