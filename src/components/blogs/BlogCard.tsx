type Props = {
  data: any;
};

export const BlogCard: React.VFC<Props> = (props) => {
  return (
    <div>
      <div>img</div>
      <h3>title</h3>
      <p>description</p>
      <p>createdAt</p>
    </div>
  );
};
