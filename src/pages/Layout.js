import React, { useEffect } from "react";
import HeaderLogout from "../components/HeaderLogout";
import HeaderLogin from "../components/HeaderLogin";
import Navbar from "../components/Navbar";
import { Outlet, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { Cookie } from "../helper/Cookie";
import axios from "axios";
import pAxios from "../axios/pAxios";
import CommonHeader from "../components/CommonHeader";

function Layout() {
  const { user, setUser, accessToken, setAccessToken, setCSRFToken, setRefreshToken } = useAuth();

  const refresh = Cookie.get("refresh");
  useEffect(() => {
    if (!accessToken && refresh) {
      console.log("access token 재발급");
      setRefreshToken(refresh);
      axios
        .post("api/auth/token/refresh", { refresh: refresh })
        .then((response) => {
          setAccessToken(response.data.access);
          setCSRFToken(response.headers["x-csrftoken"]);
          pAxios(response)
            .get("api/auth/userInfo")
            .then((res) => {
              console.log(res);
              console.log(res.data);
              setUser(res.data);
            });
        })
        .catch((err) => console.log(err));
    }
    // } else if (!accessToken && !refresh) {
    //   alert("로그인이 필요한 서비스입니다");
    //   return navigate("/login");
    // }
  }, []);

  return (
    <div>
      {user.username ? <HeaderLogin /> : <HeaderLogout />}
      <CommonHeader />
      {/* <Navbar /> */}
      <Outlet /> {/*자식 component 들어감*/}
    </div>
  );
}

export default Layout;
