import React from "react";
import styles from "./LoginModal.module.css";

function KakaoLogin() {
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&response_type=code`;
  const kakaoLink = () => {
    window.location.href = KAKAO_AUTH_URL;
  };
  return (
    <div>
      <button className={styles.btn} onClick={kakaoLink}></button>
    </div>
  );
}

export default KakaoLogin;
