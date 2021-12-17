import { useTranslation } from 'next-i18next';
import CategoriesGrid from './categories-grid';
import styles from './all-categories.module.scss';
import { category } from '../../../lib/types';

interface Props {
  categories: category[];
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

const AllCategories: React.FC<Props> = (props) => {
  const { categories, images } = props;
  const { t } = useTranslation('common');

  return (
    <div>
      <div className={styles.container}>
        <h1 className="header">
          {t('select')}
        </h1>
        <div className="header-underline"></div>
        <div className={styles.divider}></div>
      </div>
      <CategoriesGrid categories={categories} images={images} />
    </div>
  );
};

export default AllCategories;
