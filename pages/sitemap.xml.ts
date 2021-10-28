import { getCategoryFileNames, getFileNamesPerCategory } from '../lib/data-utils';
import { GetServerSidePropsContext } from 'next';

type artworksPerCategory = {
  categoryName: string;
  artworks: string[];
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
          .map((artwork) => {
            return `
              <url>
                <loc>${`${BASE_URL}/destinations/${categoryName}/${artwork}`}</loc>
              </url>
              <url>
                <loc>${`${BASE_URL}/es-Ar/destinations/${categoryName}/${artwork}`}</loc>
              </url>
         `;
          })
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
    ).map((fileName) => fileName.replace(/\.md$/, '')),
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
