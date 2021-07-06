import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Tag } from "src/components/blogs/Tag";
import { Layout } from "src/components/layouts/Layout";
import { client } from "src/libs/client/client";
import { fixDateFormat } from "src/libs/fixDateFormat";
import type { Blog, Blogs } from "src/types/types";

export const getStaticPaths: GetStaticPaths = async () => {
  const blogs: Blogs = await client.get({ endpoint: "blogs" });

  const paths = blogs.contents.map((blog) => {
    return `/blog/${blog.slug}`;
  });

  return { paths: paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const blogs: Blogs = await client.get({ endpoint: "blogs" });
  const blogDetail = blogs.contents.filter((blog) => {
    return blog.slug === context.params?.slug;
  });
  return {
    props: { blogDetail: blogDetail[0] },
  };
};
type Props = {
  blogDetail: Blog;
};
const BlogDetailPage: NextPage<Props> = (props) => {
  return (
    <Layout metaTitle={`${props.blogDetail.title} | まよブログ`}>
      <div>
        <h1 className="text-3xl font-bold">{props.blogDetail.title}</h1>;
        <p>{props.blogDetail.category.name}</p>
        <ul>
          {props.blogDetail.tags.map((tag, index) => {
            return (
              <li key={index}>
                <Tag tagName={tag.name} />
              </li>
            );
          })}
        </ul>
        <p>{fixDateFormat(props.blogDetail.createdAt)}</p>
        {/* eslint-disable-next-line @typescript-eslint/naming-convention */}
        <article dangerouslySetInnerHTML={{ __html: props.blogDetail.body }}></article>
      </div>
    </Layout>
  );
};
export default BlogDetailPage;
