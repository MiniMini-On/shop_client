import React from "react";
import logo from "../static/images/oround.png";
import styles from "../components/CommonHeader.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function CommonHeader() {
  return (
    <div>
      <div className={styles.wrap}>
        <div className={styles.log}>
          <img src={logo} alt="logo" />
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
