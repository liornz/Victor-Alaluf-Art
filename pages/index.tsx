import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

interface Props {}

const Home: React.FC<Props> = (props) => {
  const {} = props;
  return <div>Home Page</div>;
};

export default Home;

export const getStaticProps: GetStaticProps = async (context) => {
  const locale = context.locale!;

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'footer', 'nav'])),
    },
  };
};
