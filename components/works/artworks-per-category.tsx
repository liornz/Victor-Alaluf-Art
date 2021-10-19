import ArtworksGrid from './artworks-grid';
import styles from './artworks-per-category.module.scss';
import { artwork, category } from '../../lib/types';

interface Props {
  artworks: artwork[];
  category: category;
}

const ArtworksPerCagegory: React.FC<Props> = (props) => {
  const { artworks, category } = props;

  return (
    <>
      <div className={styles.container}>
        <h1 className="header">
          {`${category.name.toUpperCase()}`}
        </h1>
        <div className="header-underline"></div>
        <div className={styles.divider}></div>
      </div>
      <ArtworksGrid
        artworks={artworks}
        image={category.image}
        slug={category.slug}
      />
    </>
  );
};

export default ArtworksPerCagegory;
