import Image from 'next/image';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';

interface Props {}

const Article: React.FC<Props> = (props) => {
  const {} = props;
  const router = useRouter();
  const filename = router.query.article!;
  const imagePath = `/images/press/${filename}.jpg`;
  return (
    <Image
      src={imagePath}
      alt="press image"
      width={400}
      height={300}
      layout="responsive"
    />
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const locale = context.locale!;

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'footer', 'nav'])),
    },
  };
};

export default Article;

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}
