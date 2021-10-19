import { Fragment, useContext } from 'react';
import { useRouter } from 'next/router';
import MainHeader from './main-header';
import styles from './layout.module.scss';
import Footer from '../footer/footer';
import Notification from '../ui/notification';
import NotificationContext from '../../context/notification-context';

interface Props {}

const Layout: React.FC<Props> = (props) => {
  const {} = props;
  const router = useRouter();
  const notificationCtx = useContext(NotificationContext);
  const activeNotification = notificationCtx.notification;

  return (
    <Fragment>
      <MainHeader />
      <main
        className={styles.main}
        style={
          router.pathname === '/' ? { paddingTop: '0px' } : {}
        }
      >
        {props.children}
      </main>
      <Footer />
      {activeNotification && (
        <Notification
          title={activeNotification.title}
          message={activeNotification.message}
          status={activeNotification.status}
        />
      )}
    </Fragment>
  );
};

export default Layout;
