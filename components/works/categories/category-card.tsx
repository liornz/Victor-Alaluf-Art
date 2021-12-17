import Image from 'next/image';
import Link from 'next/link';
import styles from './category-card.module.scss';
import { category } from '../../../lib/types';

interface Props {
  category: category;
  image: {
    imageProps: {
      blurDataURL: string;
      src: string;
      height: number;
      width: number;
      type?: string | undefined;
    };
  };
}

const CategoryCard: React.FC<Props> = (props) => {
  const { slug, name } = props.category;
  const { image } = props;
  return (
    <Link href={`/works/${slug}`}>
      <a>
        <div className={styles.card}>
          <div className={styles.image}>
            <Image
              {...image.imageProps}
              alt={`image representing ${name}`}
              layout="responsive"
              placeholder="blur"
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
