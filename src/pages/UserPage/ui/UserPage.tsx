import styles from "./userpage.module.scss";

import useAuthContext from "@/app/module/hooks/useAuthContext.ts";
import { UserHeader } from "@/features";
import { User } from "@/shared/config/interfaces/User/User.ts";
import { Footer } from "@/widgets";

const UserPage = () => {
  const { user } = useAuthContext();

  console.log(user);
  return (
    <main>
      <UserHeader currUser={User} />
      <div className={styles.user__content}>user</div>
      <Footer />
    </main>
  );
};

export default UserPage;
