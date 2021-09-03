import Link from "next/link";
import { memo } from "react";

export const Footer: React.VFC = memo(() => {
  return (
    <footer className="px-4 md:px-64 pt-8 pb-20 lg:pb-8 bg-white dark:bg-gray-900 border-t border-gray-100">
      <nav className="flex w-full">
        <div className="w-1/2">
          <h4 className="py-1 pl-2 mb-4 font-bold border-l-4 border-black dark:border-white">
            サイト一覧
          </h4>
          <ul className="text-sm text-black dark:text-white underline">
            <li className="mb-2">
              <Link href="/">
                <a>ホーム</a>
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/blog">
                <a>ブログ</a>
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/category">
                <a>カテゴリー</a>
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/tag">
                <a>タグ</a>
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/profile">
                <a>プロフィール</a>
              </Link>
            </li>
          </ul>
        </div>

        <div className="w-1/2">
          <h4 className="py-1 pl-2 mb-4 font-bold border-l-4 border-black dark:border-white">
            SNS
          </h4>
          <ul className="text-sm text-black dark:text-white underline">
            <li className="mb-2">
              <a href="https://twitter.com/mayo1201blog">Twitter</a>
            </li>
            <li className="mb-2">
              <a href="https://github.com/mayone-du">GitHub</a>
            </li>
          </ul>
        </div>
      </nav>
      <p className="my-4 text-center">copyright&copy;&nbsp;Yuki Ishikawa</p>
    </footer>
  );
});

Footer.displayName = "Footer";
