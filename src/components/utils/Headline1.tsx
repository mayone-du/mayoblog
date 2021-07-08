type Props = {
  text: string;
};
export const Headline1: React.VFC<Props> = (props) => {
  return <h1 className="pb-4 text-3xl font-bold">{props.text}</h1>;
};
