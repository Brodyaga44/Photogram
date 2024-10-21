import styles from "./userheader.module.scss";

import useAuthContext from "@/app/module/hooks/useAuthContext.ts";
import { AccountActions, UserActions } from "@/entity";
import { OtherUserHeaderTop, UserHeaderInfo, UserHeaderTop } from "@/features";
import { HeaderProps } from "@/shared/config/interfaces/Header/HeaderProps.ts";

const UserHeader = ({ currUser }: HeaderProps) => {
  const { user } = useAuthContext();
  return (
    <header className={styles.uheader}>
      {user ? (
        <UserHeaderTop currUser={currUser} />
      ) : (
        <OtherUserHeaderTop currUser={currUser} />
      )}
      <UserHeaderInfo currUser={currUser} />
      {user ? <AccountActions /> : <UserActions />}
    </header>
  );
};

export default UserHeader;
