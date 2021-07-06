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
        {/* タイトル */}
        <h1 className="pb-4 text-3xl font-bold">{props.blogDetail.title}</h1>
        {/* サムネイル */}
        <img src={props.blogDetail.image} alt="" className="block object-cover w-full h-60" />
        {/* カテゴリー */}
        <p className="flex items-center py-4 font-bold underline">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="block w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z"
            />
          </svg>
          <span className="block">{props.blogDetail.category.name}</span>
        </p>
        {/* タグ */}
        <ul className="flex items-center pb-4">
          {props.blogDetail.tags.map((tag, index) => {
            return (
              <li key={index}>
                <Tag tagName={tag.name} />
              </li>
            );
          })}
        </ul>
        {/* 作成日時 */}
        <p className="flex items-center text-sm text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="block w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="block">{fixDateFormat(props.blogDetail.createdAt)}</span>
        </p>
        <article
          className="pt-4"
          // eslint-disable-next-line @typescript-eslint/naming-convention
          dangerouslySetInnerHTML={{ __html: props.blogDetail.body }}
        ></article>
      </div>
    </Layout>
  );
};
export default BlogDetailPage;
