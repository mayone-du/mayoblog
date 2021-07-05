type Props = {
  blogTitle: string;
};
export const BlogTitle: React.VFC<Props> = (props) => {
  return <h1 className="text-3xl font-bold">{props.blogTitle}</h1>;
};
