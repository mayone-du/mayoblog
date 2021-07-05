import { useSearch } from "src/libs/hooks/useSearch";

export const SideBar: React.VFC = () => {
  const { handleSearch } = useSearch();
  return (
    <aside className="block overflow-hidden ml-4 md:w-1/3">
      <form
        onSubmit={handleSearch}
        className="flex p-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-100 shadow-sm"
      >
        <input
          type="search"
          className="block px-2 w-3/4 h-10 bg-white border-t border-b border-l focus:outline-none"
          placeholder="search"
        />
        <button
          type="submit"
          className="flex justify-center items-center w-1/4 h-10 border-t border-r border-b border-l"
        >
          検索
        </button>
      </form>
    </aside>
  );
};
