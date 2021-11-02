import { Fragment, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import MainHeader from './main-header';
import styles from './layout.module.scss';
import Footer from '../footer/footer';
import Notification from '../ui/notification';
import NotificationContext from '../../context/notification-context';

interface Props {}

const Layout: React.FC<Props> = (props) => {
  const breakpoint = 600;
  let winWidth = true;
  if (typeof window !== 'undefined') {
    winWidth = window.innerWidth <= breakpoint;
  }
  const [isMobile, setIsMobile] = useState(winWidth);
  const {} = props;
  const router = useRouter();
  const notificationCtx = useContext(NotificationContext);
  const activeNotification = notificationCtx.notification;

    useEffect(() => {
      const handleResizeWindow = () =>
        window.innerWidth <= breakpoint
          ? setIsMobile(true)
          : setIsMobile(false);
      handleResizeWindow();
      window.addEventListener('resize', handleResizeWindow);
      return () => {
        window.removeEventListener('resize', handleResizeWindow);
      };
    }, [breakpoint]);

    let main: JSX.Element | null = (
      <main
        className={styles.main}
        style={
          router.pathname === '/' && !isMobile ? { paddingTop: '0px' } : {}
        }
      >
        {props.children}
      </main>
    );

      if (typeof window === 'undefined') {
        main = null;
      }

  return (
    <Fragment>
      <MainHeader />
      {main}
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
