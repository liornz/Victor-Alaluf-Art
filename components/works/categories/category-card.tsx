import Image from 'next/image';
import Link from 'next/link';
import styles from './category-card.module.scss';
import { category } from '../../../lib/types';

interface Props {
  category: category;
}

const CategoryCard: React.FC<Props> = (props) => {
  const { slug, name, image, blurDataURL } = props.category;
  const imagePath = `/images/categories/${slug}/${image}`;
  return (
    <Link href={`/works/${slug}`}>
      <a>
        <div className={styles.card}>
          <div className={styles.image}>
            <Image
              src={imagePath}
              alt={`image representing ${name}`}
              width={400}
              height={280}
              layout="responsive"
              // placeholder="blur"
              // blurDataURL={blurDataURL}
            />
            <div className={styles.overlay}></div>
          </div>
          <div className={styles.title}>
            <h1>{name}</h1>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default CategoryCard;
