import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import {
  getCategoryFileNames,
  getFileData,
  getFileNamesPerCategory,
} from '../../lib/data-utils';
import React, { Fragment } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Artwork from '../../components/works/single-artwork-page/artwork';
import { artwork } from '../../lib/types';
import Head from 'next/head';

interface Props {
  fileData: artwork;
}

const ArtWorkPage: React.FC<Props> = (props) => {
  const { fileData } = props;
  const slug = useRouter().query.slug as string[];
  const category = slug[0];
  const fileName = slug[1];

  return (
    <Fragment>
      <Head>
        <title>{`${fileData.title}`}</title>
        <meta
          name="description"
          content={`Vic Alaluf Art - ${fileData.title}`}
        />
      </Head>
      <Artwork artwork={fileData} category={category} fileName={fileName} />
    </Fragment>
  );
};

export default ArtWorkPage;

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params!.slug as string[];
  const category = slug[0];
  const fileName = slug[1];
  const locale = context.locale! as string;
  const data = getFileData(category, locale, fileName);

  return {
    props: {
      fileData: data,
      ...(await serverSideTranslations(locale, ['artwork', 'footer', 'nav'])),
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  let pathsArray: {
    params: {
      slug: string[];
    };
    locale: string;
  }[] = [];
  const categoryFileNames = getCategoryFileNames('en-US');
  const categoryFileSlugs = categoryFileNames.map((fileName) =>
    fileName.replace(/\.md$/, '')
  );
  for (const category of categoryFileSlugs) {
    const fileNames = getFileNamesPerCategory(category, 'en-US');
    const fileSlugs = fileNames.map((fileName) =>
      fileName.replace(/\.md$/, '')
    );
    const pathsEn = fileSlugs.map((file) => ({
      params: { slug: [category, file] },
      locale: 'en-US',
    }));

    const pathsEs = fileSlugs.map((file) => ({
      params: { slug: [category, file] },
      locale: 'es-AR',
    }));
    const pathsCountry = pathsEn.concat(pathsEs);
    pathsArray = pathsArray.concat(pathsCountry);
  }

  return {
    paths: pathsArray,
    fallback: false,
  };
};
