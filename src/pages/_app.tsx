import "tailwindcss/tailwind.css";
import "nprogress/nprogress.css";

import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import nprogress from "nprogress";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";

nprogress.configure({ showSpinner: false, speed: 400, minimum: 0.25 });

const App = (props: AppProps) => {
  if (process.browser) {
    nprogress.start();
  }
  useEffect(() => {
    nprogress.done();
  });

  return (
    <ThemeProvider attribute="class">
      <props.Component {...props.pageProps} />
      <Toaster toastOptions={{ duration: 2500 }} />
    </ThemeProvider>
  );
};

export default App;
