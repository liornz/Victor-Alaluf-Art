import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '../components/layout/layout';
import { appWithTranslation } from 'next-i18next';
import { NotificationContextProvider } from '../context/notification-context';

export const siteTitle = 'Victor Alaluf - Artist Portfolio';
const siteDescription =
  'Artwork Portfolio of Victor Alaluf - A Conceptual Artist in the flieds of Installation, Sculpture and Drawing';


function MyApp({ Component, pageProps }: AppProps) {

  const generalHead = (
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <meta charSet="UTF-8" />
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
      />
      <meta charSet="utf-8"></meta>
      <meta
        name="google-site-verification"
        content="g9rOuYhxp85PFoEn6Ib1IRk6ogMouW5ZlU5tk-djwhE"
      />
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      {/* <meta name="og:title" content={siteTitle} />
      <meta
        property="og:image"
        content="images\posters\portada-la-vida-es-un-viaje.jpg"
      />
      <meta name="og:description" content={siteDescription} />
      <meta property="og:url" content="https://sinfronteras-travelblog.com/" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:type" content="website" /> */}

      <link rel="preconnect" href="https://fonts.gstatic.com" />
    </Head>
  );

  return (
    <NotificationContextProvider>
      <Layout>
        {generalHead}
        <Component {...pageProps} />
      </Layout>
    </NotificationContextProvider>
  );
}
export default appWithTranslation(MyApp);
