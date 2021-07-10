import cheerio from "cheerio";
import type { GetStaticProps, NextPage } from "next";
import { Layout } from "src/components/layouts/Layout";
import { Headline1 } from "src/components/utils/Headline1";
import { addClassNames } from "src/libs/addClassNames";
import { client } from "src/libs/client/client";

export const getStaticProps: GetStaticProps = async () => {
  const profile: any = await client.get({ endpoint: "profile" });
  const $ = cheerio.load(profile.body);
  const classNamesAddedHtml = addClassNames($);
  return { props: { profile: profile, parsedHtml: classNamesAddedHtml.html() }, revalidate: 60 };
};
type Props = {
  profile: any;
  parsedHtml: any;
};
const ProfilePage: NextPage<Props> = (props) => {
  return (
    <Layout meta={{ pageName: "まよねーづのプロフィール詳細 | まよブログ" }}>
      <Headline1 text={props.profile.title} />
      <article
        dangerouslySetInnerHTML={{
          // eslint-disable-next-line @typescript-eslint/naming-convention
          __html: props.parsedHtml,
        }}
      ></article>
    </Layout>
  );
};

export default ProfilePage;
