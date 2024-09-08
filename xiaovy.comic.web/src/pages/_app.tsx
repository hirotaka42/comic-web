import type { AppProps } from 'next/app';

function ComicWebApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default ComicWebApp;
