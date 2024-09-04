import styles from "./accountpage.module.scss";

import { UserHeader } from "@/features";
import { User } from "@/shared/config/interfaces/User/User.ts";
import { Footer } from "@/widgets";

const AccountPage = () => {
  return (
    <main>
      <UserHeader user={User} />
      <div className={styles.ap__content}>user</div>
      <Footer />
    </main>
  );
};

export default AccountPage;
