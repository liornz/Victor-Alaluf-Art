import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

interface Props {}

const ArtWorkPage: React.FC<Props> = (props) => {
  const {} = props;
  return <div>A specific art Work Page</div>;
};

export default ArtWorkPage;

export const getStaticProps: GetStaticProps = async (context) => {
  const locale = context.locale!;

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'footer', 'nav'])),
    },
  };
};
