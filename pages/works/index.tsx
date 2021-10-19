import { GetStaticProps } from 'next';
import AllCategories from '../../components/works/categories/all-categories';
import { category } from '../../lib/types';
import { getAllCategoriesData } from '../../lib/data-utils';
import React from 'react';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

interface Props {
  categories: category[];
}

const AllCategoriesPage: React.FC<Props> = (props) => {
  const { categories } = props;
  return (
    <React.Fragment>
      <Head>
        <title>Victor Alaluf Art - Artwork Categories Page</title>
        <meta
          name="description"
          content="Artwork Categories - Victor Alaluf Art - Choose category"
        />
      </Head>
      <AllCategories categories={categories} />
    </React.Fragment>
  );
};

export default AllCategoriesPage;

export const getStaticProps: GetStaticProps = async (context) => {
  const locale = context.locale!;
  const categories = getAllCategoriesData(locale);

  return {
    props: {
      categories: categories,
      ...(await serverSideTranslations(locale, ['common', 'footer', 'nav'])),
    },
  };
};
