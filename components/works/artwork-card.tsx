import Image from 'next/image';
import Link from 'next/link';

import styles from './artwork-card.module.scss';
import { artwork } from '../../lib/types';

interface Props {
  artwork: artwork;
} 
  

const ArtworkCard: React.FC<Props> = (props) => {
  const { categorySlug, slug, title, mainImage, blurDataURL, materials, measurements } = props.artwork;
  const imagePath = `/images/works/${categorySlug}/${slug}/${mainImage}`;

  return (
    <Link href={`/works/${categorySlug}/${slug}`}>
      <a>
        <div className={styles.card}>
          <div className={styles.image}>
            <Image
              src={imagePath}
              alt={title}
              width={400}
              height={280}
              layout="responsive"
              // placeholder="blur"
              // blurDataURL={blurDataURL}
            />
            <div className={styles.overlay}></div>
          </div>
          <div className={styles.text}>
            <div className={styles.title}>
              <h1>{title}</h1>
            </div>
            <div className={styles.subtitle}>
              <p>{materials}</p>
            </div>
            <div className={styles.subtitle}>
              <p>{measurements}</p>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};


export default ArtworkCard;
