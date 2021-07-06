import Link from "next/link";

type Props = {
  title: string;
  slug: string;
  image: string;
  description: string;
};

export const BlogCard: React.VFC<Props> = (props) => {
  return (
    <div className="mb-4 rounded-md border">
      <Link href={`blogs/${props.slug}`}>
        <a className="flex items-center p-4 w-full">
          <img src={props.image} className="block object-cover w-1/4 min-h-full border" alt="" />
          <div className="w-3/4">
            <h3 className="text-lg font-bold">{props.title}</h3>
            <p className="text-xs">{props.description}</p>
          </div>
        </a>
      </Link>
    </div>
  );
};
