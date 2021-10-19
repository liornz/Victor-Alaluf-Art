import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import VideoOpening from '../components/home-page/video-opening';
import Hero from '../components/home-page/hero';

interface Props {}

const Home: React.FC<Props> = (props) => {
  const {} = props;
  return (
    <>
      <VideoOpening />
      <Hero />
    </>
  );
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
