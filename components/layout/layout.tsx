import { Fragment, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import MainHeader from "./main-header";
import styles from "./layout.module.scss";
import Footer from "../footer/footer";
import Notification from "../ui/notification";
import NotificationContext from "../../context/notification-context";
import { Lato } from "@next/font/google";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
});

type Props = {
  children?: React.ReactNode;
};

const Layout: React.FC<Props> = (props) => {
  const breakpoint = 600;
  const [isMobile, setIsMobile] = useState(true);
  const {} = props;
  const router = useRouter();
  const notificationCtx = useContext(NotificationContext);
  const activeNotification = notificationCtx.notification;

  useEffect(() => {
    const handleResizeWindow = () =>
      window.innerWidth <= breakpoint ? setIsMobile(true) : setIsMobile(false);
    handleResizeWindow();
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, [breakpoint]);

  let main = (
    <main
      className={styles.main + " " + lato.className}
      style={router.pathname === "/" && !isMobile ? { paddingTop: "0px" } : {}}
    >
      {props.children}
    </main>
  );

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
