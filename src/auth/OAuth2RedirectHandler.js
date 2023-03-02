import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import pAxios from "../axios/pAxios";
import useAuth from "../hooks/useAuth";
import RegisterModal from "../components/RegisterModal";
import { Cookie } from "../helper/Cookie";

const OAuth2RedirectHandler = () => {
  const navigate = useNavigate();
  const { accessToken, setAccessToken, setRefreshToken, csrftoken, setCSRFToken, setUser, user } = useAuth();
  const [ModalisOpen, setModalIsOpen] = useState(false);

  let code = new URL(window.location.href).searchParams.get("code");

  const kakaoLogin = (code) => {
    axios
      .post("api/auth/callback/kakao", { code: code })
      .then((res) => {
        console.log(res);
        Cookie.set("refresh", res.data.refresh);
        setAccessToken(res.data.access);
        setCSRFToken(res.headers["x-csrftoken"]);
        setRefreshToken(res.data.refresh);
        pAxios(res)
          .get("api/auth/userInfo")
          .then((res) => {
            console.log(res);
            // console.log(res.data);
            if (res.data.username) {
              setUser(res.data);
              console.log("login 성공");
              navigate("/");
            } else {
              console.log("username이 없습니다");
              setModalIsOpen(true);
            }
          });
        //   .then(() => {
        //     console.log(user);
        //     console.log("login 성공");
        //     navigate("/");
        //   });
        // navigate("/");
        // alert("login 완료");
      })
      .catch((err) => {
        console.log("소셜로그인 에러", err);
        window.alert("로그인에 실패하였습니다.");
        // history.replace("/login"); // 로그인 실패하면 로그인화면으로 돌려보냄
      });
  };

  // 인가코드

  useEffect(() => {
    kakaoLogin(code);
  }, []);

  return <div>{ModalisOpen && <RegisterModal />}</div>;
};

export default OAuth2RedirectHandler;
