import styles from "./userheadertop.module.scss";

import Accordion from "@/shared/assets/Header/accordion.svg?react";
import Bookmark from "@/shared/assets/Header/bookmark.svg?react";
import Arrow from "@/shared/assets/User/Header/arrow.svg?react";
import { HeaderProps } from "@/shared/config/interfaces/Header/HeaderProps.ts";
const UserHeaderTop = ({ user }: HeaderProps) => {
  return (
    <div className={styles.uht__container}>
      <div className={styles.uht__leftPart}>
        <div className={styles.uht__nickContainer}>{user?.nick}</div>
        <div className={styles.uht__notifyContainer}>{user?.notification}+</div>
        <div>
          <Arrow />
        </div>
      </div>
      <div className={styles.uht__rightPart}>
        <div>
          <Bookmark />
        </div>
        <div>
          <Accordion />
        </div>
      </div>
    </div>
  );
};

export default UserHeaderTop;
