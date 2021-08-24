import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import { BottomNavigation } from "src/components/layouts/BottomNavigation";
import { BreadCrumb } from "src/components/layouts/BreadCrumb";
import { Footer } from "src/components/layouts/Footer";
import { Header } from "src/components/layouts/Header";
import { SideBar } from "src/components/layouts/sidebar/SideBar";

type Props = {
  meta?: {
    pageName?: string;
    description?: string;
    ogImagePath?: string;
  };
  // パンくずリストを表示するためにpageからlayoutをとおしてBreadCrumbへ
  breadCrumb?: string[];
};

export const Layout: React.FC<Props> = (props) => {
  const router = useRouter();
  const meta = {
    title: props.meta?.pageName ? `${props.meta.pageName} | まよブログ` : "まよブログ",
    description: props.meta?.description
      ? `${props.meta.description}`
      : "プログラミングに関する技術知識を発信するブログです。",
    ogImagePath: props.meta?.ogImagePath ? props.meta.ogImagePath : "",
  };
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta property="og:url" content={`https://mayoblog.vercel.app${router.asPath}`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content="技術知識のアウトプットブログ。" />
        <meta property="og:site_name" content="まよブログ" />
        <meta property="og:image" content={meta.ogImagePath} />

        {/* Twitter */}
        <meta name="twitter:card" content="Summary Card" />
        <meta name="twitter:site" content="@mayo1201blog" />
        <meta name="twitter:image" content={meta.ogImagePath} />

        {/* PWA */}
        <link
          rel="apple-touch-icon"
          type="image/png"
          href="/pwa/icons/apple-touch-icon-180x180.png"
        />
        <link rel="icon" sizes="512x512" href="/pwa/icons/icon-512x512.png" />
        <link rel="icon" href="/images/favicon.ico" />
        <link rel="manifest" href="/pwa/manifest.json" />

        <meta name="msapplication-square70x70logo" content="/pwa/icons/site-tile-70x70.png" />
        <meta name="msapplication-square150x150logo" content="/pwa/icons/site-tile-150x150.png" />
        <meta name="msapplication-wide310x150logo" content="/pwa/icons/site-tile-310x150.png" />
        <meta name="msapplication-square310x310logo" content="/pwa/icons/site-tile-310x310.png" />
        <meta name="msapplication-TileColor" content="#000" />
        {/* Safari */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#000" />
        <meta name="apple-mobile-web-app-title" content="myapp" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/pwa/icons/apple-touch-icon-180x180.png"
        />
        {/* 一般 */}
        <meta name="application-name" content="App Name" />
        <meta name="theme-color" content="#000" />
        <meta name="description" content="app description" />
        <link rel="icon" sizes="512x512" href="/pwa/icons/icon-512x512.png" />
        <link rel="icon" href="/images/favicon.ico" />
        <link rel="manifest" href="/pwa/manifest.json" />

        {/* GoogleAnalytics */}
        {/* ... */}
      </Head>
      <Header />
      <BottomNavigation />
      <BreadCrumb breadCrumb={props.breadCrumb} />
      <div className="lg:flex px-4 lg:px-64 pb-8 text-gray-800 dark:text-gray-100 bg-gray-50 dark:bg-gray-800">
        <main className="block p-4 lg:mr-4 lg:w-2/3 bg-white dark:bg-gray-900 rounded-lg border border-gray-100 shadow-sm">
          {props.children}
        </main>
        <SideBar />
      </div>
      <Footer />
    </>
  );
};
