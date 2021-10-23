import ArtworksGrid from './artworks-grid';
// import styles from './artworks-per-category.module.scss';
import 'animate.css';
import { artwork, category } from '../../lib/types';

interface Props {
  artworks: artwork[];
  category: category;
}

const ArtworksPerCagegory: React.FC<Props> = (props) => {
  const { artworks, category } = props;

  return (
    <>
      <div className="landing">
        <div className="home-wrap">
          <div className={`home-inner-${category.slug}`}></div>
        </div>
      </div>
      <div className="caption">
        <h1
          className="animate__animated animate__fadeInUp animate__delay-1s"
        >
          {category.name.toUpperCase()}
        </h1>
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
