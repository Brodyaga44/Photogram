import { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./profile.module.scss";

import useAuth from "@/app/module/hooks/useAuth.ts";
import useAuthContext from "@/app/module/hooks/useAuthContext.ts";
import useOutsideClick from "@/app/module/hooks/useOutsideClick.ts";
import { Dropdown } from "@/features";
import Photo from "@/shared/assets/DefaultPhoto.svg?react";

const Profile = () => {
  const [open, setOpen] = useState(false);

  const auth = useAuth();
  const { user } = useAuthContext();
  const navigate = useNavigate();
  const handleClick = () => {
    // navigate("/login");
    // auth.logout();
    console.log("logout");
  };

  return (
    <Dropdown
      open={open}
      setOpen={setOpen}
      items={<button onClick={handleClick}>Выйти</button>}
    >
      <div className={styles.profile}>
        <Photo className={styles.profile__photo} />
      </div>
    </Dropdown>
  );
};

export default Profile;
