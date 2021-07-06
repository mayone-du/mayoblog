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
    <div className="mb-4 rounded-md border">
      <Link href={`blog/${props.slug}`}>
        <a className="flex items-center p-4 w-full">
          <img src={props.image} className="block object-cover w-1/4 min-h-full border" alt="" />
          <div className="pl-4 w-3/4">
            <h3 className="text-lg font-bold">{props.title}</h3>
            <p className="text-sm">{props.description}</p>
            <p>{props.category}</p>
            <ul className="flex items-center text-xs text-gray-700">
              {props.tags.map((tag, index) => {
                return (
                  <li key={index}>
                    <Tag tagName={tag.name} />
                  </li>
                );
              })}
            </ul>
            <p className="text-xs text-gray-500">{fixDateFormat(props.createdAt)}</p>
          </div>
        </a>
      </Link>
    </div>
  );
};
