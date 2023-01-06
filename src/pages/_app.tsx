import { type AppType } from "next/dist/shared/lib/utils";
import localFont from '@next/font/local';
import "../styles/globals.css";

const wingdings = localFont({
  src: [
    {
      path: "./fonts/wingdings.woff2",
      weight: '400',
      style: 'normal',
    }
  ],
  variable: '--font-wingdings',
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return <div className={`${wingdings.variable} font-mono h-screen`}><Component {...pageProps} /></div>;
};

export default MyApp;
