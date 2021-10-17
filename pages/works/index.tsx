import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

interface Props {}

const Works: React.FC<Props> = (props) => {
  const {} = props;
  return (
    <div>
      Main Artworks Page with Cards linking to specific categories of the
      artworks
    </div>
  );
};

export default Works;

export const getStaticProps: GetStaticProps = async (context) => {
  const locale = context.locale!;

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'footer', 'nav'])),
    },
  };
};
