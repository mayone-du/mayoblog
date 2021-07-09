import Link from "next/link";
import { memo } from "react";
import { HEADER_MENU } from "src/utils/MENU";

export const BottomNavigation: React.VFC = memo(() => {
  return (
    <nav className="block lg:hidden fixed bottom-0 z-10 p-4 w-full bg-white border-t">
      <ul className="flex items-center">
        {HEADER_MENU.map((menu, index) => {
          return (
            <li key={index}>
              <Link href={menu.href}>
                <a className="block">{menu.label}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
});

BottomNavigation.displayName = "BottomNavigation";
