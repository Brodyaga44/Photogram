import { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./profile.module.scss";

import useAuth from "@/app/module/hooks/useAuth.ts";
import useAuthContext from "@/app/module/hooks/useAuthContext.ts";
import { Dropdown } from "@/features";
import Photo from "@/shared/assets/DefaultPhoto.svg?react";

const Profile = () => {
  const auth = useAuth();
  const { user } = useAuthContext();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login");
    auth.logout();
    console.log("logout");
  };
  return (
    <Dropdown
      items={<div onClick={handleClick}>{user ? "Выйти" : "Войти"}</div>}
    >
      <div className={styles.profile}>
        <Photo className={styles.profile__photo} />
      </div>
    </Dropdown>
  );
};

export default Profile;
