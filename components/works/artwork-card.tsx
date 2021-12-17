import Image from 'next/image';
import Link from 'next/link';
import { Fade } from 'react-awesome-reveal';

import styles from './artwork-card.module.scss';
import { artwork } from '../../lib/types';

interface Props {
  artwork: artwork;
  images: {
    imageProps: {
      blurDataURL: string;
      src: string;
      height: number;
      width: number;
      type?: string | undefined;
    };
  };
}

const ArtworkCard: React.FC<Props> = (props) => {
  const {
    categorySlug,
    slug,
    title,
    materials,
    measurements,
  } = props.artwork;
  const images = props.images;

  return (
    <Fade delay={300}>
      <Link href={`/works/${categorySlug}/${slug}`}>
        <a>
          <div className={styles.card}>
            <div className={styles.image}>
              <Image
                {...images.imageProps}
                alt={title}
                width={400}
                height={280}
                layout="responsive"
                placeholder="blur"
              />
              <div className={styles.overlay}></div>
            </div>
            <div className={styles.text}>
              <div className={styles.title}>
                <h1>{title}</h1>
              </div>
              <div className={styles.materials}>
                <p>{materials}</p>
              </div>
              <div className={styles.measurements}>
                <p>{measurements}</p>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </Fade>
  );
};

export default ArtworkCard;
