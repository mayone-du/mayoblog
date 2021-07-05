import Link from "next/link";

export const Header: React.VFC = () => {
  return (
    <div>
      <header className="py-2 md:px-64 bg-white dark:bg-gray-900 border-b border-gray-100 shadow-sm">
        <nav className="flex justify-between items-center">
          <div className="my-2">
            <Link href="/">
              <a className="block text-xl font-bold">まよブログ</a>
            </Link>
          </div>
          <ul className="flex">
            <li className="my-2">
              <Link href="/">
                <a>HOME</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};
