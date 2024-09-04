import styles from "./userheaderinfo.module.scss";

import Photo from "@/shared/assets/Header/photo.png";
import { HeaderProps } from "@/shared/config/interfaces/Header/HeaderProps.ts";

const UserHeaderInfo = ({ user }: HeaderProps) => {
  return (
    <div>
      <div className={styles.uhi__info}>
        <div className={styles.uhi__photoContainer}>
          <img src={Photo} alt="" className={styles.uhi__photo}></img>
        </div>
        <div className={styles.uhi__activity}>
          <div className={styles.uhi__activityItem}>
            {user.posts}{" "}
            <span className={styles.uhi__activityTitle}>Posts</span>
          </div>
          <div className={styles.uhi__activityItem}>
            {user.followers}
            <span className={styles.uhi__activityTitle}>Followers</span>
          </div>
          <div className={styles.uhi__activityItem}>
            {user.following}
            <span className={styles.uhi__activityTitle}>Following</span>
          </div>
        </div>
      </div>
      <div className={styles.uhi__about}>
        <div className={styles.uhi__userName}>{user.name}</div>
        <div className={styles.uhi__userCat}>{user.category}</div>
        <div className={styles.uhi__userAbout}>{user.about}</div>
      </div>
    </div>
  );
};

export default UserHeaderInfo;
