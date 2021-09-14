import { Layout } from "src/components/layouts/Layout";
import { Headline1 } from "src/components/utils/Headline1";

const NotFoundPage = () => {
  return (
    <div>
      <Layout meta={{ pageName: "404 Not Found" }} breadCrumb={["404 Not Found"]}>
        <Headline1 text="404 Not Found" />
        <p>お探しのページは見つかりませんでした。</p>
      </Layout>
    </div>
  );
};

export default NotFoundPage;
