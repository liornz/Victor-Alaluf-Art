import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Layout from '../components/layout/layout';
import { appWithTranslation } from 'next-i18next';
import { NotificationContextProvider } from '../context/notification-context';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NotificationContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NotificationContextProvider>
  );
}
export default appWithTranslation(MyApp);
