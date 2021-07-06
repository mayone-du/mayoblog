import type { GetStaticProps, NextPage } from "next";
import { BlogCard } from "src/components/blogs/BlogCard";
import { Layout } from "src/components/layouts/Layout";
import type { Blogs, Tags } from "src/types/types";

import { client } from "../libs/client/client";

export const getStaticProps: GetStaticProps = async () => {
  const blogs: Blogs = await client.get({ endpoint: "blogs" });
  const tags: Tags = await client.get({ endpoint: "tags" });

  return {
    props: {
      blogs: blogs,
      tags: tags,
    },
    revalidate: 60 * 60,
  };
};

type Props = {
  blogs: Blogs;
  tags: Tags;
};
const Index: NextPage<Props> = (props) => {
  return (
    <Layout metaTitle="まよブログ">
      <div>
        <ul>
          {props.blogs.contents.map((blog, index) => {
            return (
              <li key={index}>
                <BlogCard
                  title={blog.title}
                  slug={blog.slug}
                  image={blog.image}
                  description={blog.description}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </Layout>
  );
};

export default Index;
