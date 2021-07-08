import type { NextPage } from "next";
import { memo } from "react";

type Props = {
  tableOfContents: any;
};
export const TableOfContents: NextPage<Props> = memo((props) => {
  return (
    <ul className="border">
      {props.tableOfContents.map((contents: any, index: any) => {
        return (
          <li key={index}>
            <a href={`#${contents.id}`}>{contents.text}</a>
          </li>
        );
      })}
    </ul>
  );
});

TableOfContents.displayName = "TableOfContents";
