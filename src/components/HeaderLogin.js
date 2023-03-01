import React, { useEffect } from "react";
import axios from "axios";
import { Cookie } from "../helper/Cookie";
import { useNavigate } from "react-router-dom";
import styles from "./HeaderLogin.module.css";
import useAxios from "../hooks/useAxios";
import useAuth from "../hooks/useAuth";

function HeaderLogin() {
  const { setUser, setAccessToken, setCSRFToken, setRefreshToken, user } = useAuth();
  const navigate = useNavigate();
  const privateAxios = useAxios();
  const logoutHandler = () => {
    privateAxios
      .post("api/auth/logout")
      .then((res) => {
        console.log(res);
        Cookie.remove("refresh");
        setCSRFToken("");
        setRefreshToken("");
        setUser({});
        setAccessToken("");
      })

      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  return (
    <div className={styles.div}>
      <span>[{user.username}]</span>
      <button onClick={logoutHandler}>logout</button>
    </div>
  );
}

export default HeaderLogin;
