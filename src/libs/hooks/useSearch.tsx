import { useRouter } from "next/dist/client/router";
import { useCallback, useState } from "react";
import toast from "react-hot-toast";

export const useSearch = () => {
  const router = useRouter();
  const [searchKeyword, setSearchKeyword] = useState("");
  const handleChangeSearchKeyword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
  }, []);
  const handleSearch = useCallback(
    (e: React.ChangeEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (searchKeyword === "") {
        toast.error("キーワードを入力してください。");
        return;
      }
      router.push({ pathname: "/search/results", query: { keyword: searchKeyword } });
    },
    [router, searchKeyword],
  );
  return { searchKeyword, handleChangeSearchKeyword, handleSearch };
};
