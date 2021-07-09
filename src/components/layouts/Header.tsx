import Link from "next/link";
import { useTheme } from "next-themes";
import { memo, useCallback } from "react";
import { MoonSvg } from "src/components/icons/svgs/MoonSvg";
import { SunSvg } from "src/components/icons/svgs/SunSvg";
import { HEADER_MENU } from "src/utils/MENU";

export const Header: React.VFC = memo(() => {
  const { theme, setTheme } = useTheme();
  const handleChangeTheme = useCallback(() => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }, [theme, setTheme]);
  return (
    <header className="py-2 px-4 lg:px-64 dark:text-gray-100 bg-white dark:bg-gray-900 border-b border-gray-100 shadow-sm">
      <nav className="flex justify-between items-center">
        <div className="my-2">
          <Link href="/">
            <a className="block text-xl font-bold">まよブログ</a>
          </Link>
        </div>
        {/* PC */}
        <ul className="flex">
          {HEADER_MENU.map((menu, index) => {
            return (
              <li key={index} className="hidden lg:block">
                <Link href={menu.href}>
                  <a className="flex flex-col justify-center items-center mx-4 text-black dark:text-gray-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="block w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={menu.icon}
                      />
                    </svg>
                    <span className="block text-xs">{menu.label}</span>
                  </a>
                </Link>
              </li>
            );
          })}
          <li className="flex justify-center items-center ml-4">
            <button className="block" onClick={handleChangeTheme} type="button">
              {theme === "light" && <SunSvg className="block w-6 h-6" />}
              {theme === "dark" && <MoonSvg className="block w-6 h-6" />}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
});

Header.displayName = "Header";
