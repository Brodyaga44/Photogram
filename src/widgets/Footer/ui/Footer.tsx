import styles from "./footer.module.scss";

import Photo from "@/shared/assets/DefaultPhoto.svg?react";
import Add from "@/shared/assets/Footer/Add.svg?react";
import Explore from "@/shared/assets/Footer/Explore.svg?react";
import Home from "@/shared/assets/Footer/Home.svg?react";
import Inbox from "@/shared/assets/Footer/inbox.svg?react";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <Home className={styles.footer__item} />
        <Explore className={styles.footer__item} />
        <Add className={styles.footer__item} />
        <Inbox className={styles.footer__item} />
        <Photo className={styles.footer__item} />
      </div>
    </footer>
  );
};

export default Footer;
