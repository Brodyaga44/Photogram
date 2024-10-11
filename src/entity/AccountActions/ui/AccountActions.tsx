import styles from "./accountactions.module.scss";

import AddUser from "@/shared/assets/Header/addUser.svg?react";
const AccountActions = () => {
  return (
    <div className={styles.actions__container}>
      <div className={styles.actions__edit}>Edit profile</div>
      <div className={styles.actions__addUser}>
        <AddUser />
      </div>
    </div>
  );
};

export default AccountActions;
