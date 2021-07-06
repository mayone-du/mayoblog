import Link from "next/link";
import { Tag } from "src/components/blogs/Tag";
import { fixDateFormat } from "src/libs/fixDateFormat";

type Props = {
  title: string;
  slug: string;
  image: string;
  description: string;
  createdAt: string;
  category: string;
  tags: { name: string }[];
};

export const BlogCard: React.VFC<Props> = (props) => {
  return (
    <div className="mb-4 rounded-md border hover:shadow-sm transition">
      <Link href={`blog/${props.slug}`}>
        <a className="flex items-center p-4 w-full">
          <img src={props.image} className="block object-cover w-1/4 min-h-full border" alt="" />
          <div className="pl-4 w-3/4">
            <h3 className="text-lg font-bold">{props.title}</h3>
            <p className="text-sm text-gray-700">{props.description}</p>
            {/* カテゴリー */}
            <p className="flex items-center py-2 text-sm font-bold underline">
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
              <span className="block">{props.category}</span>
            </p>
            {/* タグ */}
            <ul className="flex items-center text-xs text-gray-700">
              {props.tags.map((tag, index) => {
                return (
                  <li key={index}>
                    <Tag tagName={tag.name} />
                  </li>
                );
              })}
            </ul>
            {/* 作成日時 */}
            <p className="text-xs text-right text-gray-500">{fixDateFormat(props.createdAt)}</p>
          </div>
        </a>
      </Link>
    </div>
  );
};
