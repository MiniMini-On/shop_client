import React from "react";
import logo from "../static/images/oround.png";
import styles from "../components/CommonHeader.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function CommonHeader() {
  const navigate = useNavigate();
  return (
    <div>
      <div className={styles.wrap}>
        <div className={styles.logo} onClick={() => navigate("/")}>
          <img className={styles.img} src="https://www.oround.com/image/new_icon/logo-foot.svg" alt="logo" />
        </div>
        <div className={styles.search}>
          <form className={styles.form}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            &nbsp;&nbsp;
            <input className={styles.input} type="text" placeholder="찾으시는 상품이 있나요?" />
            <button>검색</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CommonHeader;
