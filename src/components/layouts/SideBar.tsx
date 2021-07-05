import { memo } from "react";
import { useSearch } from "src/libs/hooks/useSearch";

export const SideBar: React.VFC = memo(() => {
  const { handleSearch } = useSearch();
  const sidebarItemClassNames =
    "p-4 mb-8 bg-white dark:bg-gray-900 rounded-lg border border-gray-100 shadow-sm";
  return (
    <aside className="block overflow-hidden ml-4 md:w-1/3">
      <form onSubmit={handleSearch} className={sidebarItemClassNames}>
        <div className="flex">
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
        </div>
      </form>
      <section className={sidebarItemClassNames}>
        <h3 className="font-bold text-center">プロフィール</h3>
        <div>プロフィールです。</div>
      </section>
    </aside>
  );
});

SideBar.displayName = "SideBar";
