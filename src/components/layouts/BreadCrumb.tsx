export const BreadCrumb: React.VFC = () => {
  return (
    <nav className="block md:px-64 px-4 text-gray-800 py-8 dark:text-gray-100 bg-gray-50 dark:bg-gray-800">
      <ul className="flex items-center p-4 rounded-lg shadow-sm border dark:bg-gray-900 border-gray-100 bg-white">
        <li className="relative before:absolute before:top-1/2 before:left-14 before:w-2 before:h-2 before:border-r-2 before:border-b-2 before:border-black dark:before:border-white before:transform before:-rotate-45 before:-translate-x-1/2 before:-translate-y-1/2">
          HOME
        </li>
        <li className="ml-8">current page</li>
      </ul>
    </nav>
  );
};
