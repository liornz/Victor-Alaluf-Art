import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

import Link from 'next/link';
import styles from './menu-items.module.scss';

const MenuItems: React.FC = () => {
  const router = useRouter();
  const { t } = useTranslation('nav');

  return (
    <div className={styles.container}>
      <Link href="/works">
        <a
          style={{
            color: router.pathname === '/works' ? 'rgb(240,150,37)' : '',
          }}
        >
          {t('works')}
        </a>
      </Link>
      <Link href="/exhibitions">
        <a
          style={{
            color: router.pathname === '/exhibitions' ? 'rgb(240,150,37)' : '',
          }}
        >
          {t('exhibitions')}
        </a>
      </Link>
      <Link href="/shop">
        <a
          style={{
            color: router.pathname === '/shop' ? 'rgb(240,150,37)' : '',
          }}
        >
          {t('shop')}
        </a>
      </Link>
      <Link href="/contact">
        <a
          style={{
            color: router.pathname === '/contact' ? 'rgb(240,150,37)' : '',
          }}
        >
          {t('contact')}
        </a>
      </Link>
    </div>
  );
};

export default MenuItems;
