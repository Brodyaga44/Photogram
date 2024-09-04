import styles from "./userpage.module.scss";

import { UserHeader } from "@/features";
import { User } from "@/shared/config/interfaces/User/User.ts";
import { Footer } from "@/widgets";

const UserPage = () => {
  return (
    <main>
      <UserHeader user={User} />
      <div className={styles.user__content}>user</div>
      <Footer />
    </main>
  );
};

export default UserPage;
