import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

interface Props {}

const ExhibitionsPage: React.FC<Props> = (props) => {
  const {} = props;
  return (
    <div>
      All Exhibitions Page
      <p>Links to specific pages of specific exhibitions</p>
    </div>
  );
};

export default ExhibitionsPage;

export const getStaticProps: GetStaticProps = async (context) => {
  const locale = context.locale!;

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'footer', 'nav'])),
    },
  };
};
