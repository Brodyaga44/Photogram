import { useNavigate } from "react-router-dom";

import styles from "./login.module.scss";

import { AddLoginForm } from "@/features";
import { CustomButton } from "@/shared";
const Login = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    // const url = "localhost:5173";
    // window.location.href = `${url}`;
    // return false;
    // location.pathname = "/reg";
    // <Navigate to="/reg" />;
    // <Link to="/reg" />;
    navigate("/reg");
    console.log("1");
  };
  return (
    <div className={styles.login}>
      <span className={styles.login__logo}>Photogram</span>
      <div className={styles.login__content}>
        <AddLoginForm />
        <CustomButton typeBtn={"secondary"} onClick={() => handleClick()}>
          Регистрация
        </CustomButton>
      </div>
    </div>
  );
};

export default Login;
