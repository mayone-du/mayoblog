import type { NextPage } from "next";
import { Layout } from "src/components/layouts/Layout";
import { Profile } from "src/components/profile/Profile";

const ProfilePage: NextPage = () => {
  return (
    <Layout meta={{ pageName: "まよねーづのプロフィール詳細 | まよブログ" }}>
      <Profile />
    </Layout>
  );
};

export default ProfilePage;
