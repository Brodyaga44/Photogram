import styles from "./userheader.module.scss";

import UserHeaderInfo from "@/features/UserHeaderInfo/ui/UserHeaderInfo.tsx";
import UserHeaderTop from "@/features/UserHeaderTop/ui/UserHeaderTop.tsx";
import { HeaderProps } from "@/shared/config/interfaces/Header/HeaderProps.ts";

const UserHeader = ({ user }: HeaderProps) => {
  return (
    <header className={styles.uheader}>
      <UserHeaderTop user={user} />
      <UserHeaderInfo user={user} />
    </header>
  );
};

export default UserHeader;
