import "tailwindcss/tailwind.css";
import "nprogress/nprogress.css";
import "src/styles/global.css";

import type { AppProps } from "next/app";
import Router from "next/router";
import { ThemeProvider } from "next-themes";
import NProgress from "nprogress";
import { Toaster } from "react-hot-toast";

NProgress.configure({ showSpinner: false, speed: 400, minimum: 0.25 });
Router.events.on("routeChangeStart", () => {
  return NProgress.start();
});
Router.events.on("routeChangeComplete", () => {
  return NProgress.done();
});
Router.events.on("routeChangeError", () => {
  return NProgress.done();
});

const App = (props: AppProps) => {
  return (
    <ThemeProvider attribute="class">
      <props.Component {...props.pageProps} />
      <Toaster toastOptions={{ duration: 2500 }} />
    </ThemeProvider>
  );
};

export default App;
