import Link from "next/link";
import { useTheme } from "next-themes";
import { memo, useCallback } from "react";
import { HEADER_MENU } from "src/utils/MENU";

export const Header: React.VFC = memo(() => {
  const { theme, setTheme } = useTheme();
  const handleChangeTheme = useCallback(() => {
    theme === "light" ? setTheme("dark") : setTheme("light");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme]);
  return (
    <div>
      <header className="py-2 px-4 md:px-64 dark:text-gray-100 bg-white dark:bg-gray-900 border-b border-gray-100 shadow-sm">
        <nav className="flex justify-between items-center">
          <div className="my-2">
            <Link href="/">
              <a className="block text-xl font-bold">まよブログ</a>
            </Link>
          </div>
          {/* PC */}
          <ul className="hidden md:flex">
            {HEADER_MENU.map((menu, index) => {
              return (
                <li key={index}>
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
                {theme === "light" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                )}
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
});

Header.displayName = "Header";
