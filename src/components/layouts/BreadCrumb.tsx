import { useRouter } from "next/dist/client/router";
import { memo } from "react";

import Link from "next/link";
export const BreadCrumb: React.VFC = memo(() => {
  const router = useRouter();
  const currentPagePath = router.asPath;

  return (
    <nav className="block md:px-64 px-4 text-gray-800 py-8 dark:text-gray-100 bg-gray-50 dark:bg-gray-800">
      <ul className="flex items-center p-4 rounded-lg shadow-sm border dark:bg-gray-900 border-gray-100 bg-white">
        {/* ホームの場合 */}
        {currentPagePath === "/" ? (
          <li className="font-bold">HOME</li>
        ) : (
          <>
            {/* ホーム以外の場合 */}
            <li className="relative before:absolute before:top-1/2 before:left-14 before:w-2 before:h-2 before:border-r-2 before:border-b-2 before:border-black dark:before:border-white before:transform before:-rotate-45 before:-translate-x-1/2 before:-translate-y-1/2">
              <Link href="/">
                <a className="block text-blue-600">HOME</a>
              </Link>
            </li>
            <li className="ml-6 font-bold">{currentPagePath}</li>
          </>
        )}
      </ul>
    </nav>
  );
});

BreadCrumb.displayName = "BreadCrumb";
