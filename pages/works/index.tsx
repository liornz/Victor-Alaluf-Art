import { GetStaticProps, InferGetStaticPropsType } from 'next';
import AllCategories from '../../components/works/categories/all-categories';
import { category } from '../../lib/types';
import { getAllCategoriesData } from '../../lib/data-utils';
import React from 'react';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { getPlaiceholder } from 'plaiceholder';

interface Props {
  categories: category[];
}

const AllCategoriesPage: React.FC<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ categories, imagePropsArray }) => {
  return (
    <React.Fragment>
      <Head>
        <title>Victor Alaluf Art - Artwork Categories Page</title>
        <meta
          name="description"
          content="Artwork Categories - Victor Alaluf Art - Choose category"
        />
      </Head>
      <AllCategories categories={categories} images={imagePropsArray} />
    </React.Fragment>
  );
};

export default AllCategoriesPage;

export const getStaticProps: GetStaticProps = async (context) => {
  const locale = context.locale!;
  const categories = getAllCategoriesData(locale);

    const imagePropsArray = await Promise.all(
      categories.map(async (category) => {
        const imagePath = `/images/categories/${category.slug}/${category.image}`;
        const { base64, img } = await getPlaiceholder(imagePath);
        return {
          imageProps: {
            ...img,
            blurDataURL: base64,
          },
        };
      })
    ).then((values) => values);

  return {
    props: {
      categories: categories,
      imagePropsArray,
      ...(await serverSideTranslations(locale, ['common', 'footer', 'nav'])),
    },
  };
};
