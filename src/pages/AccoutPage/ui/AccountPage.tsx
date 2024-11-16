import { useState } from "react";

import styles from "./accountpage.module.scss";

import { Tabs } from "@/shared";
import { User } from "@/shared/config/interfaces/User/User.ts";
import { UserHeader, UserInfo } from "@/widgets";
import { Footer, NotificationsDrawer, UserActions } from "@/widgets";
import { tabs } from "@/widgets/TabData/ui/TabData.tsx"; // к чему относится? сомневаюсь что виджет

const AccountPage = () => {
  const [selectedTab, setSelectedTab] = useState<number>();
  const [open, setOpen] = useState(false);

  return (
    <main>
      <UserHeader currUser={User} open={open} setOpen={setOpen} />
      <UserInfo currUser={User} />
      <UserActions />

      <NotificationsDrawer open={open} setOpen={setOpen} />
      <div className={styles.ap__content}>
        <Tabs selectedTab={selectedTab} onClick={setSelectedTab} tabs={tabs} />
      </div>
      <Footer />
    </main>
  );
};

export default AccountPage;
