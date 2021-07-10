import { memo } from "react";
import { SearchSvg } from "src/components/icons/svgs/SearchSvg";
import { useSearch } from "src/libs/hooks/useSearch";

export const SearchForm: React.VFC = memo(() => {
  const { searchKeyword, handleChangeSearchKeyword, handleSearch } = useSearch();
  return (
    <form onSubmit={handleSearch} className="flex">
      <input
        type="search"
        className="block px-2 w-5/6 h-10 bg-white dark:bg-gray-700 border-t border-b border-l focus:outline-none"
        placeholder="search"
        value={searchKeyword}
        onChange={handleChangeSearchKeyword}
      />
      <button
        type="submit"
        className="flex justify-center items-center w-1/6 h-10 dark:bg-gray-700 border-t border-r border-b border-l"
      >
        <SearchSvg className="block w-4 h-4" />
      </button>
    </form>
  );
});

SearchForm.displayName = "SearchForm";
