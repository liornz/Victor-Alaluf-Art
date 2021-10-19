import ArtworkCard from './artwork-card';
import styles from './artworks-grid.module.scss';
import { artwork } from '../../lib/types';

interface Props {
  artworks: artwork[];
  image?: string;
  slug: string;
}

const ArtworksGrid: React.FC<Props> = (props) => {
  const { artworks, image, slug } = props;
  return (
    <div className={styles.fixedContainer}>
      <div className={styles.dark}>
        {artworks.map((item) => (
          <ArtworkCard
            key={item.slug}
            artwork={item}
          />
        ))}
      </div>
      <div className={styles.fixedWrap}>
        <div className={styles.fixedInner} style={image ? {backgroundImage: `url('/images/categories/${slug}/${image}')`} : undefined}></div>
      </div>
    </div>
  );
};

export default ArtworksGrid;
