import styles from "./otheruser.module.scss";

import ArrowBack from "@/shared/assets/Header/ArrowBack.svg?react";
import Bell from "@/shared/assets/Header/Bell.svg?react";
import Dots from "@/shared/assets/Header/Dots.svg?react";
import Verified from "@/shared/assets/Header/Verified.svg?react";
import { HeaderProps } from "@/shared/config/interfaces/Header/HeaderProps.ts";
const OtherUserHeaderTop = ({ currUser }: HeaderProps) => {
  return (
    <div className={styles.oht__container}>
      <div className={styles.oht__leftPart}>
        <ArrowBack />
      </div>
      <div className={styles.oht__nick}>
        <div className={styles.oht__nickContainer}>{currUser?.nick}</div>
        <div>
          <Verified />
        </div>
      </div>
      <div className={styles.oht__rightPart}>
        <div>
          <Bell />
        </div>
        <div>
          <Dots />
        </div>
      </div>
    </div>
  );
};

export default OtherUserHeaderTop;
