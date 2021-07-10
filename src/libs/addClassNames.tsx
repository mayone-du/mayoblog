import type { CheerioAPI } from "cheerio";
import hljs from "highlight.js";

export const addClassNames = ($: CheerioAPI) => {
  // h2 タグへクラスを付与
  $("h2").each((_, element) => {
    $(element).addClass(
      "p-4 text-2xl font-bold mb-4 border-l-4 border-black bg-gray-50 dark:bg-gray-800 dark:border-white",
    );
  });
  // h3 タグへクラスを付与
  $("h3").each((_, element) => {
    $(element).addClass(
      "pl-4 py-2 my-4 font-bold text-xl border-l-8 border-black dark:border-white",
    );
  });
  // h4 タグへクラスを付与
  $("h4").each((_, element) => {
    $(element).addClass("my-2 font-bold text-lg");
  });

  // pタグへクラスを付与
  $("p").each((_, element) => {
    $(element).addClass("mb-4");
  });
  $("ul").each((_, element) => {
    $(element).addClass(
      "py-4 px-8 m-4 bg-gray-50 border border-black border-dashed list-disc dark:bg-gray-800 dark:border-white",
    );
  });
  // シンタックスハイライトの導入
  $("pre").each((_, element) => {
    $(element).addClass("hljs block bg-gray-600 rounded-sm overflow-x-auto");
  });
  $("pre code").each((_, element) => {
    const result = hljs.highlightAuto($(element).text());
    $(element).html(result.value);
    $(element).addClass("p-2 block");
  });
  return $;
};
