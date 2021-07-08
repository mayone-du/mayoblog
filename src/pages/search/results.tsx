import type { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import { BlogCard } from "src/components/blogs/BlogCard";
import { Layout } from "src/components/layouts/Layout";
import { client } from "src/libs/client/client";
import type { Blogs } from "src/types/types";

const ResultsPage: NextPage = () => {
  const router = useRouter();
  const searchKeyword = router.query.keyword;
  const [results, setResults] = useState<Blogs>();
  useEffect(() => {
    (async () => {
      const data: Blogs = await client.get({ endpoint: `blogs?q=${searchKeyword}` });
      setResults(data);
    })();
  }, [searchKeyword]);
  return (
    <Layout meta={{ pageName: `${searchKeyword}の検索結果` }}>
      <p>{searchKeyword}の検索結果一覧</p>
      <ul>
        {results?.contents.map((blog, index) => {
          return (
            <li key={index}>
              <BlogCard blog={blog} />
            </li>
          );
        })}
      </ul>
    </Layout>
  );
};

export default ResultsPage;
