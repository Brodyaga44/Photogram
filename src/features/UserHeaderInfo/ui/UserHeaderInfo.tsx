import styles from "./userheaderinfo.module.scss";

import { Link } from "@/entity";
import Photo from "@/shared/assets/Header/photo.png";
import { HeaderProps } from "@/shared/config/interfaces/Header/HeaderProps.ts";

const UserHeaderInfo = ({ currUser }: HeaderProps) => {
  return (
    <div>
      <div className={styles.uhi__info}>
        <div className={styles.uhi__photoBorder}>
          <div className={styles.uhi__photoContainer}>
            <img src={Photo} alt="" className={styles.uhi__photo}></img>
          </div>
        </div>

        <div className={styles.uhi__activity}>
          <div className={styles.uhi__activityItem}>
            {currUser.posts}{" "}
            <span className={styles.uhi__activityTitle}>Posts</span>
          </div>
          <div className={styles.uhi__activityItem}>
            {currUser.followers}
            <span className={styles.uhi__activityTitle}>Followers</span>
          </div>
          <div className={styles.uhi__activityItem}>
            {currUser.following}
            <span className={styles.uhi__activityTitle}>Following</span>
          </div>
        </div>
      </div>
      <div className={styles.uhi__about}>
        <div className={styles.uhi__userName}>{currUser.name}</div>
        <div className={styles.uhi__userCat}>{currUser.category}</div>
        <div className={styles.uhi__userAbout}>{currUser.about}</div>
        <Link currUser={currUser} />
      </div>
    </div>
  );
};

export default UserHeaderInfo;
