import Head from 'next/head';
import Error404 from '../components/404/404';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';

const Page404: React.FC = () => {
  return (
    <>
      <Head>
        <title>Victor Alaluf - Page Not Found</title>
        <meta
          name="description"
          content="404 Page - Victor Alaluf - Page Not Found"
        />
      </Head>
      <Error404 />
    </>
  );
};

export default Page404;

export const getStaticProps: GetStaticProps = async (context) => {
  const locale = context.locale!;
  return {
    props: {
      ...(await serverSideTranslations(locale, ['error', 'footer', 'nav'])),
    },
  };
};
