
import ExtendedLogo from './extended-logo';
import MenuItems from './menu-items';
import SocialMedia from './social-media';
import styles from './footer.module.scss';

const Footer: React.FC = () => {

  return (
    <div className={styles.container}>
      <ExtendedLogo />
      <MenuItems />
      <SocialMedia />
    </div>
  );
};

export default Footer;