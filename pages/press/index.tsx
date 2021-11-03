import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';
import Head from 'next/head';

import Press from '../../components/press-page/press';

interface Props {}

const PressPage: React.FC<Props> = (props) => {
  const {} = props;
  return (
    <>
      <Head>
        <title>Victor Alaluf - Press Page</title>
        <meta
          name="description"
          content="Press Page - Victor Alaluf - Artist Portfolio"
        />
      </Head>
      <Press />
    </>
  );
};

export default PressPage;

export const getStaticProps: GetStaticProps = async (context) => {
  const locale = context.locale!;
  return {
    props: {
      ...(await serverSideTranslations(locale, ['press', 'footer', 'nav'])),
    },
  };
};
