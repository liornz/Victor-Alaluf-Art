import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

interface Props {}

const ShopPage: React.FC<Props> = (props) => {
  const {} = props;
  return <div>Shop Page</div>;
};

export default ShopPage;

export const getStaticProps: GetStaticProps = async (context) => {
  const locale = context.locale!;

  return {
    props: {
      ...(await serverSideTranslations(locale, ['shop', 'footer', 'nav'])),
    },
  };
};
