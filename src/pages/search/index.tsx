import type { NextPage } from "next";
import { Layout } from "src/components/layouts/Layout";
import { SearchForm } from "src/components/layouts/sidebar/SearchForm";

const SearchIndexPage: NextPage = () => {
  return (
    <Layout meta={{ pageName: "検索" }}>
      <SearchForm />
    </Layout>
  );
};

export default SearchIndexPage;
