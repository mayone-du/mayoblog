import "highlight.js/styles/hybrid.css";

import cheerio from "cheerio";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { TableOfContents } from "src/components/blogs/TableOfContents";
import { Tag } from "src/components/blogs/Tag";
import { ClockSvg } from "src/components/icons/svgs/ClockSvg";
import { FolderOpenSvg } from "src/components/icons/svgs/FolderOpenSvg";
import { Layout } from "src/components/layouts/Layout";
import { Headline1 } from "src/components/utils/Headline1";
import { addClassNames } from "src/libs/addClassNames";
import { client } from "src/libs/client/client";
import { fixDateFormat } from "src/libs/fixDateFormat";
import type { Blog, Blogs } from "src/types/types";

export const getStaticPaths: GetStaticPaths = async () => {
  const blogs: Blogs = await client.get({ endpoint: "blogs" });

  const paths = blogs.contents.map((blog) => {
    return `/blog/${blog.slug}`;
  });

  return { paths: paths, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const blogs: Blogs = await client.get({ endpoint: "blogs" });
  const blogDetail = blogs.contents.filter((blog) => {
    return blog.slug === context.params?.slug;
  });

  // 見出しの作成
  const $ = cheerio.load(blogDetail[0].body);
  const headings = $("h2").toArray();
  const tableOfContents = headings.map((data: any) => {
    return {
      text: data.children[0].data,
      id: data.attribs.id,
      level: data.name,
    };
  });

  // それぞれのタグにclassNameを付与
  const classNamesAddedHtml = addClassNames($);

  return {
    props: {
      blogDetail: blogDetail[0],
      tableOfContents: tableOfContents,
      parsedHtml: classNamesAddedHtml.html(),
    },
  };
};
type Props = {
  blogDetail: Blog;
  tableOfContents: any;
  parsedHtml: any;
};
const BlogDetailPage: NextPage<Props> = (props) => {
  return (
    <Layout
      meta={{
        pageName: props.blogDetail.title,
        description: props.blogDetail.description,
        ogImagePath: props.blogDetail.image.url,
      }}
      breadCrumb={["ブログ", props.blogDetail.title]}
    >
      <div>
        {/* タイトル */}
        <Headline1 text={props.blogDetail.title} />
        {/* サムネイル */}
        <img
          src={props.blogDetail.image.url}
          alt=""
          className="block object-cover w-full h-auto border"
        />
        {/* カテゴリー */}
        <p className="flex items-center py-4 font-bold underline">
          <FolderOpenSvg className="block w-6 h-6" />
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
        <p className="flex items-center text-gray-500">
          <ClockSvg className="block w-4 h-4" />
          <span className="block">{fixDateFormat(props.blogDetail.createdAt)}</span>
        </p>
        {/* 目次 */}
        <div>
          <p className="py-4 font-bold">{props.blogDetail.description}</p>
        </div>
        <div>
          <h3 className="py-4 font-bold text-center">目次</h3>
          <TableOfContents tableOfContents={props.tableOfContents} />
        </div>
        <article
          className="pt-4"
          // eslint-disable-next-line @typescript-eslint/naming-convention
          dangerouslySetInnerHTML={{ __html: props.parsedHtml }}
        ></article>
      </div>
    </Layout>
  );
};
export default BlogDetailPage;
