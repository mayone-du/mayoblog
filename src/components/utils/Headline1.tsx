type Props = {
  text: string;
};
export const Headline1: React.VFC<Props> = (props) => {
  return <h1 className="pb-4 text-2xl md:text-3xl font-bold text-center">{props.text}</h1>;
};
