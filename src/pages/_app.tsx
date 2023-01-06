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

// Incorrect way
// const MyApp: AppType = ({ Component, pageProps }) => {
//   return <div className={`${wingdings.variable} font-mono h-screen`}><Component {...pageProps} /></div>;
// };

// Correct way
// The font needs to be lifted to the body, 
// but we can't modify the body in _app.ts 
// and we can't use @next/font in _document.ts
const MyApp: AppType = ({ Component, pageProps }) => {
  return <>
    <>
      {/* Required so we can use the font in the global scope and create a variable in Tailwind */}
      <style jsx global>{`
        :root {
          --font-wingdings: ${wingdings.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
    <Component {...pageProps} />;</>
};

export default MyApp;
