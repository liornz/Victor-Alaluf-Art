import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

interface Props {}

const ExhibitionPage: React.FC<Props> = (props) => {
  const {} = props;
  return (
    <div>
      Single Exhibition Page
      <p>Links to specific Artworks in this exhibition</p>
    </div>
  );
};

export default ExhibitionPage;

export const getStaticProps: GetStaticProps = async (context) => {
  const locale = context.locale!;

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'footer', 'nav'])),
    },
  };
};
