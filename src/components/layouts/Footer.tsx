import { memo } from "react";

export const Footer: React.VFC = memo(() => {
  return (
    <footer className="pt-8 pb-20 lg:pb-8 bg-white dark:bg-gray-900 border-t border-gray-100">
      <p className="text-center">copyright&copy;</p>
    </footer>
  );
});

Footer.displayName = "Footer";
