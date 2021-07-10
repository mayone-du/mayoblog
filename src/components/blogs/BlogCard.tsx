import Link from "next/link";
import { memo } from "react";
import { Tag } from "src/components/blogs/Tag";
import { ClockSvg } from "src/components/icons/svgs/ClockSvg";
import { FolderOpenSvg } from "src/components/icons/svgs/FolderOpenSvg";
import { fixDateFormat } from "src/libs/fixDateFormat";
import type { Blog } from "src/types/types";

type Props = {
  blog: Blog;
};

export const BlogCard: React.VFC<Props> = memo((props) => {
  return (
    <div className="mb-4 rounded-md border hover:shadow-sm transition">
      <Link href={`/blog/${props.blog.slug}`}>
        <a className="block md:flex items-center p-4 w-full">
          <img
            src={props.blog.image.url}
            className="block object-cover w-full md:w-1/4 min-h-full border"
            alt=""
          />
          <div className="md:pl-4 w-full md:w-3/4">
            <h3 className="text-lg font-bold">{props.blog.title}</h3>
            <p className="text-sm text-gray-700 dark:text-gray-400">{props.blog.description}</p>
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

    // <div className="mb-4 rounded-md border hover:shadow-sm transition">
    //   <h3 className="text-2xl font-bold text-center">
    //     <Link href={`/blog/${props.blog.slug}`}>
    //       <a className="hover:underline">{props.blog.title}</a>
    //     </Link>
    //   </h3>
    //   <Link href={`/blog/${props.blog.slug}`}>
    //     <a>
    //       <img src={props.blog.image.url} className="block object-cover w-full border" alt="" />
    //     </a>
    //   </Link>

    //   <div>
    //     <p className="text-sm text-gray-700 dark:text-gray-400">{props.blog.description}</p>
    //     {/* カテゴリー */}
    //     <p className="py-2 text-sm font-bold underline">
    //       <Link href={`/category/${props.blog.category.slug}`}>
    //         <a className="flex items-center">
    //           <FolderOpenSvg className="block w-6 h-6" />
    //           <span className="block">{props.blog.category.name}</span>
    //         </a>
    //       </Link>
    //     </p>
    //     {/* タグ */}
    //     <ul className="flex items-center pb-2 text-xs text-gray-700">
    //       {props.blog.tags.map((tag, index) => {
    //         return (
    //           <li key={index}>
    //             <Link href={`/tag/${tag.slug}`}>
    //               <a>
    //                 <Tag tagName={tag.name} />
    //               </a>
    //             </Link>
    //           </li>
    //         );
    //       })}
    //     </ul>
    //     {/* 作成日時 */}
    //     <p className="flex items-center text-xs text-right text-gray-500">
    //       <ClockSvg className="block w-4 h-4" />
    //       <span className="block">{fixDateFormat(props.blog.createdAt)}</span>
    //     </p>
    //   </div>
    // </div>
  );
});

BlogCard.displayName = "BlogCard";
