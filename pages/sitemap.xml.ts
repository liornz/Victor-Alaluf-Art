import {
  getCategoryFileNames,
  getFileData,
  getFileNamesPerCategory,
} from '../lib/data-utils';
import { GetServerSidePropsContext } from 'next';
import { artwork } from '../lib/types';

type artworksPerCategory = {
  categoryName: string;
  artworks: {
    artworkName: string;
    images: string[];
  }[];
};

const BASE_URL = 'https://victoralaluf.com';

function generateSiteMap(allArtworks: artworksPerCategory[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>https://victoralaluf.com/</loc>
    </url>
    <url>
      <loc>https://victoralaluf.com/works</loc>
    </url>
    <url>
      <loc>https://victoralaluf.com/press</loc>
    </url>
    <url>
      <loc>https://victoralaluf.com/contact</loc>
    </url>
    <url>
      <loc>https://victoralaluf.com/es-Ar</loc>
    </url>
    <url>
      <loc>https://victoralaluf.com/es-Ar/works</loc>
    </url>
    <url>
      <loc>https://victoralaluf.com/es-Ar/press</loc>
    </url>
    <url>
      <loc>https://victoralaluf.com/es-Ar/contact</loc>
    </url>
     ${allArtworks
       .map(({ categoryName, artworks }) => {
         return `
        <url>
           <loc>${`${BASE_URL}/destinations/${categoryName}`}</loc>
        </url>
        <url>
           <loc>${`${BASE_URL}/es-Ar/destinations/${categoryName}`}</loc>
        </url>
        ${artworks
          .map((artwork) =>
            artwork.images
              .map((imageName) => {
                return `
                <url>
                  <loc>${`${BASE_URL}/destinations/${categoryName}/${artwork.artworkName}/${imageName}`}</loc>
                </url>
                <url>
                  <loc>${`${BASE_URL}/es-Ar/destinations/${categoryName}/${artwork.artworkName}/${imageName}`}</loc>
                </url>
              `;
              })
              .join('')
          )
          .join('')}
     `;
       })
       .join('')}
   </urlset>
 `;
}

function SiteMap() {}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { res } = context;
  const categories = getCategoryFileNames('es-Ar');
  const artworks = categories.map((category) => ({
    categoryName: category.replace(/\.md$/, ''),
    artworks: getFileNamesPerCategory(
      category.replace(/\.md$/, ''),
      'es-Ar'
    ).map((artworkName) => {
      const artworkData = getFileData(
        category.replace(/\.md$/, ''),
        'en-US',
        artworkName.replace(/\.md$/, '')
      );
      return {
        artworkName: artworkName.replace(/\.md$/, ''),
        images: artworkData.images
          .split('/')
          .map((image) => image.replace(/\.jpg$|\.png$|\.jfif$/, '')),
      };
    }),
  }));

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(artworks);

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
