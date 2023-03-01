import React from "react";
import { NavLink } from "react-router-dom";
import LoginModal from "./LoginModal";
import styles from "./HeaderLogout.module.css";

function HeaderLogout() {
  return (
    <div className={styles.div}>
      <LoginModal />
    </div>
  );
}

export default HeaderLogout;
