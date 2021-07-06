import { memo } from "react";
import { ProfileCard } from "src/components/layouts/sidebar/ProfileCard";
import { SearchForm } from "src/components/layouts/sidebar/SearchForm";

export const SideBar: React.VFC = memo(() => {
  const sidebarItemClassNames =
    "p-4 mb-8 bg-white dark:bg-gray-900 rounded-lg border border-gray-100 shadow-sm";

  return (
    <aside className="block overflow-hidden pt-8 lg:pt-0 lg:ml-4 lg:w-1/3">
      {/* 検索窓 */}
      <section className={sidebarItemClassNames}>
        <SearchForm />
      </section>
      {/* 自己紹介 */}
      <section className={sidebarItemClassNames}>
        <ProfileCard />
      </section>
    </aside>
  );
});

SideBar.displayName = "SideBar";
