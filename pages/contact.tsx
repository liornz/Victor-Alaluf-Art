import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

interface Props {}

const ContactPage: React.FC<Props> = (props) => {
  const {} = props;
  return <div>Contact Page</div>;
};

export default ContactPage;

export const getStaticProps: GetStaticProps = async (context) => {
  const locale = context.locale!;

  return {
    props: {
      ...(await serverSideTranslations(locale, ['contact', 'footer', 'nav'])),
    },
  };
};
