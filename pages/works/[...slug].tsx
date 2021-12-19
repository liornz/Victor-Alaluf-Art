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
import type { InferGetStaticPropsType } from 'next';
import { getPlaiceholder } from 'plaiceholder';

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params!.slug as string[];
  const category = slug[0];
  const artworkName = slug[1];
  const locale = context.locale! as string;
  const data = getFileData(category, locale, artworkName);
  const imagesArray = data.images.split('/');
  const imagePropsArray = await Promise.all(
    imagesArray.map(async (image) => {
      const imagePath = `/images/works/${category}/${artworkName}/${image}`;
      const { base64, img } = await getPlaiceholder(imagePath);
      return {
        ...img,
        blurDataURL: base64,
      };
    })
  ).then((values) => values);

  return {
    props: {
      fileData: data,
      imagePropsArray,
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
  const categoryFileSlugs = categoryFileNames.map((FileName) =>
    FileName.replace(/\.md$/, '')
  );
  for (const category of categoryFileSlugs) {
    const fileNames = getFileNamesPerCategory(category, 'en-US');
    const fileSlugs = fileNames.map((fileName) =>
      fileName.replace(/\.md$/, '')
    );
    for (const file of fileSlugs) {
      const fileData = getFileData(category, 'en-US', file);
      const imageNamesArray = fileData.images
        .split('/')
        .map((imageName) => imageName.replace(/\.jpg$|\.png$|\.jfif$/, ''));

      const pathsEn = imageNamesArray.map((imageName) => ({
        params: { slug: [category, file, imageName] },
        locale: 'en-US',
      }));

      const pathsEs = imageNamesArray.map((imageName) => ({
        params: { slug: [category, file, imageName] },
        locale: 'es-AR',
      }));
      const pathsCategory = pathsEn.concat(pathsEs);
      pathsArray = pathsArray.concat(pathsCategory);
    }
  }

  return {
    paths: pathsArray,
    fallback: false,
  };
};

interface Props {
  fileData: artwork;
}

type Page = React.FC<InferGetStaticPropsType<typeof getStaticProps>>;

const ArtWorkPage: Page = ({ fileData, imagePropsArray }) => {
  const slug = useRouter().query.slug as string[];
  const category = slug[0];
  const imageName = slug[2];
  const imagesArray: string[] = fileData.images.split('/');
  const imageIndex = imagesArray.findIndex(
    (image) => image.replace(/\.jpg$|\.png$|\.jfif$/, '') === imageName
  );

  return (
    <Fragment>
      <Head>
        <title>{`${fileData.title}`}</title>
        <meta
          name="description"
          content={`Vic Alaluf Art - ${fileData.title}`}
        />
      </Head>
      <Artwork artwork={fileData} imageProps={imagePropsArray[imageIndex]} imageName={imageName} category={category} />
    </Fragment>
  );
};

export default ArtWorkPage;
