import type { NextPage } from "next";
import { memo } from "react";

type Props = {
  tableOfContents: any;
};
export const TableOfContents: NextPage<Props> = memo((props) => {
  return (
    <ul className="p-4 mx-auto lg:w-1/2 rounded-sm border">
      {props.tableOfContents.map((contents: any, index: any) => {
        return (
          <li className="py-1 ml-4 list-disc" key={index}>
            <a className="text-blue-600 underline" href={`#${contents.id}`}>
              {contents.text}
            </a>
          </li>
        );
      })}
    </ul>
  );
});

TableOfContents.displayName = "TableOfContents";
