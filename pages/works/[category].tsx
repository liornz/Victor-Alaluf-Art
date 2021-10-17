import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

interface Props {}

const ArtCategoryPage: React.FC<Props> = (props) => {
  const {} = props;
  return (
    <div>
      A specific art category page - sculptures / Painting / Video works /
      Installations etc.
    </div>
  );
};

export default ArtCategoryPage;

export const getStaticProps: GetStaticProps = async (context) => {
  const locale = context.locale!;

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'footer', 'nav'])),
    },
  };
};
