import styles from "./useractions.module.scss";

import AddUser from "@/shared/assets/Header/addUser.svg?react";

const UserActions = () => {
  return (
    <div className={styles.userA__container}>
      <div className={styles.userA__action}> Following</div>
      <div className={styles.userA__action}> Message</div>
      <div className={styles.userA__action}> Email</div>
      <div className={styles.userA__addUser}>
        <AddUser />
      </div>
    </div>
  );
};

export default UserActions;
