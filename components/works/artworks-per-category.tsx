import ArtworksGrid from './artworks-grid';
import 'animate.css';
import { artwork, category } from '../../lib/types';

interface Props {
  artworks: artwork[];
  category: category;
  images: {
    imageProps: {
      blurDataURL: string;
      src: string;
      height: number;
      width: number;
      type?: string | undefined;
    };
  }[];
}

const ArtworksPerCagegory: React.FC<Props> = (props) => {
  const { artworks, category, images } = props;

  return (
    <>
      <div className="landing">
        <div className="home-wrap">
          <div className={`home-inner-${category.slug}`}></div>
        </div>
      </div>
      <div className="caption">
        <h1
          className="animate__animated animate__fadeInUp"
        >
          {category.name.toUpperCase()}
        </h1>
      </div>
      <ArtworksGrid
        artworks={artworks}
        image={category.image}
        slug={category.slug}
        images={images}
      />
    </>
  );
};

export default ArtworksPerCagegory;
