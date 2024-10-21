import { useNavigate } from "react-router-dom";

import styles from "./profile.module.scss";

import useAuth from "@/app/module/hooks/useAuth.ts";
import useAuthContext from "@/app/module/hooks/useAuthContext.ts";
import Photo from "@/shared/assets/DefaultPhoto.svg?react";

const Profile = () => {
  const auth = useAuth();
  const { user } = useAuthContext();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login");
    auth.logout();
  };
  return (
    <div className={styles.profile}>
      <Photo className={styles.profile__photo} />
      <div className={styles.profile__dropdown}>
        <div className={styles.profile__content}>
          {user ? (
            <span onClick={handleClick}>Выход</span>
          ) : (
            <span>Ты не вошел</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
