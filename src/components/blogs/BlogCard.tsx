import Link from "next/link";
import { memo } from "react";
import { Tag } from "src/components/blogs/Tag";
import { ClockSvg } from "src/components/icons/svgs/ClockSvg";
import { FolderOpenSvg } from "src/components/icons/svgs/FolderOpenSvg";
import { fixDateFormat } from "src/libs/fixDateFormat";
import type { Blog } from "src/types/types";

type Props = {
  // title: string;
  // slug: string;
  // image: string;
  // description: string;
  // createdAt: string;
  // category: string;
  // tags: { name: string }[];
  blog: Blog;
};

export const BlogCard: React.VFC<Props> = memo((props) => {
  return (
    <div className="mb-4 rounded-md border hover:shadow-sm transition">
      <Link href={`blog/${props.blog.slug}`}>
        <a className="flex items-center p-4 w-full">
          <img
            src={props.blog.image}
            className="block object-cover w-1/4 min-h-full border"
            alt=""
          />
          <div className="pl-4 w-3/4">
            <h3 className="text-lg font-bold">{props.blog.title}</h3>
            <p className="text-sm text-gray-700">{props.blog.description}</p>
            {/* カテゴリー */}
            <p className="flex items-center py-2 text-sm font-bold underline">
              <FolderOpenSvg className="block w-6 h-6" />
              <span className="block">{props.blog.category.name}</span>
            </p>
            {/* タグ */}
            <ul className="flex items-center pb-2 text-xs text-gray-700">
              {props.blog.tags.map((tag, index) => {
                return (
                  <li key={index}>
                    <Tag tagName={tag.name} />
                  </li>
                );
              })}
            </ul>
            {/* 作成日時 */}
            <p className="flex items-center text-xs text-right text-gray-500">
              <ClockSvg className="block w-4 h-4" />
              <span className="block">{fixDateFormat(props.blog.createdAt)}</span>
            </p>
          </div>
        </a>
      </Link>
    </div>
  );
});

BlogCard.displayName = "BlogCard";
