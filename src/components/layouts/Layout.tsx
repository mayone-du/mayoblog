import Head from "next/head";
import { BreadCrumb } from "src/components/layouts/BreadCrumb";
import { Footer } from "src/components/layouts/Footer";
import { Header } from "src/components/layouts/Header";
import { SideBar } from "src/components/layouts/SideBar";

type Props = {
  metaTitle: string;
};

export const Layout: React.FC<Props> = (props) => {
  return (
    <>
      <Head>
        <title>{props.metaTitle}</title>
        <meta name="description" content="description" />
        <meta property="og:url" content="https://" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Test Title" />
        <meta property="og:description" content="Test Description" />
        <meta property="og:site_name" content="Test SiteName" />
        <meta property="og:image" content="/images/sample-image.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="Summary Card" />
        <meta name="twitter:site" content="@mayo1201blog" />

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
      </Head>
      <Header />
      <BreadCrumb />
      <div className="md:flex md:px-64 pb-8 bg-gray-50 dark:bg-gray-800">
        <main className="block p-4 mr-4 md:w-2/3 bg-white dark:bg-gray-900 rounded-lg border border-gray-100 shadow-sm">
          {props.children}
        </main>
        <SideBar />
      </div>
      <Footer />
    </>
  );
};
