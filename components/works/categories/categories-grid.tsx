import styles from './categories-grid.module.scss';
import CategoryCard from './category-card';
import { category } from '../../../lib/types';

interface Props {
  categories: category[]
}

const CategoriesGrid: React.FC<Props> = (props) => {
  const { categories } = props;
  return (
    <div className={styles.fixedContainer}>
      <div className={styles.dark}>
        {categories.map((category) => (
          <CategoryCard key={category.slug} category={category} />
        ))}
      </div>
      <div className={styles.fixedWrap}>
        <div className={styles.fixedInner}></div>
      </div>
    </div>
  );
};

export default CategoriesGrid;
