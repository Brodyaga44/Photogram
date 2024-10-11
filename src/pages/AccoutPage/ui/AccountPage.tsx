import { useState } from "react";

import styles from "./accountpage.module.scss";

import { UserHeader } from "@/features";
import { tabs } from "@/features/TabData/ui/TabData.tsx";
import { Tabs } from "@/shared";
import { User } from "@/shared/config/interfaces/User/User.ts";
import { Footer } from "@/widgets";

const AccountPage = () => {
  const [selectedTab, setSelectedTab] = useState<number>();
  return (
    <main>
      <UserHeader currUser={User} />
      <div className={styles.ap__content}>
        <Tabs selectedTab={selectedTab} onClick={setSelectedTab} tabs={tabs} />
      </div>
      <Footer />
    </main>
  );
};

export default AccountPage;
