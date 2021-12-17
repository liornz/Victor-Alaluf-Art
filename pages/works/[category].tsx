import { GetStaticProps, GetStaticPaths, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import ArtworksPerCategory from '../../components/works/artworks-per-category';
import {
  getCategoryFileData,
  getCategoryFileNames,
  getArtworksPerCategory,
} from '../../lib/data-utils';
import { artwork, category } from '../../lib/types';
import { getPlaiceholder } from 'plaiceholder';

interface Props {
  artworks: artwork[];
  category: category;
}

const ArtCategoryPage: React.FC<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ artworks, category, imagePropsArray }) => {
  return (
    <React.Fragment>
      <Head>
        <title>{`Victor Alaluf Art - ${category.name}`}</title>
        <meta
          name="description"
          content={`Victor Alaluf Art - ${category.name}`}
        />
      </Head>
      <ArtworksPerCategory artworks={artworks} category={category} images={imagePropsArray} />
    </React.Fragment>
  );
};

export default ArtCategoryPage;

export const getStaticProps: GetStaticProps = async (context) => {
  const locale = context.locale!;
  const categorySlug = context.params!.category;
  const artworks = getArtworksPerCategory(
    categorySlug as string,
    locale as string
  );
  const categoryFileData = getCategoryFileData(
    categorySlug as string,
    locale as string
  );

  const imagePropsArray = await Promise.all(artworks.map(async (artwork) => {
    const imagePath = `/images/works/${artwork.categorySlug}/${artwork.slug}/${artwork.mainImage}`;
    const { base64, img } = await getPlaiceholder(imagePath);
    return {
      imageProps: {
        ...img,
        blurDataURL: base64,
      },
    };
  })).then(values => values);

  return {
    props: {
      artworks,
      category: categoryFileData,
      imagePropsArray,
      ...(await serverSideTranslations(locale, ['common', 'footer', 'nav'])),
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const categoryFileNames = getCategoryFileNames('en-US');
  const categoriesArray = categoryFileNames.map((fileName) =>
    fileName.replace(/\.md$/, '')
  );
  const pathsEn = categoriesArray.map((category) => ({
    params: { category: category },
    locale: 'en-US',
  }));
  const pathsEs = categoriesArray.map((category) => ({
    params: { category: category },
    locale: 'es-AR',
  }));
  const paths = pathsEn.concat(pathsEs);
  return {
    paths: paths,
    fallback: false,
  };
};
