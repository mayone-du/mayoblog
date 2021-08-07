import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { memo } from "react";

type Props = {
  breadCrumb?: string[];
};
export const BreadCrumb: React.VFC<Props> = memo((props) => {
  const router = useRouter();
  const currentPagePath = router.asPath;

  return (
    <nav className="block py-8 px-4 lg:px-64 text-gray-800 dark:text-gray-100 bg-gray-50 dark:bg-gray-800">
      <ul className="flex items-center p-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-100 shadow-sm">
        {/* ホームの場合 */}
        {currentPagePath === "/" || currentPagePath === "/index" ? (
          <li className="font-bold">HOME</li>
        ) : (
          <>
            {/* ホーム以外の場合 */}
            <li className="relative before:absolute before:top-1/2 before:left-14 before:w-2 before:h-2 before:border-r-2 before:border-b-2 before:border-black dark:before:border-white before:transform before:-rotate-45 before:-translate-x-1/2 before:-translate-y-1/2">
              <Link href="/">
                <a className="block text-blue-600">HOME</a>
              </Link>
            </li>
            <li className="ml-6 font-bold">{props.breadCrumb}</li>
          </>
        )}
      </ul>
    </nav>
  );
});

BreadCrumb.displayName = "BreadCrumb";
