import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Cookie } from "../helper/Cookie";

function PrivateLayout() {
  const refresh = Cookie.get("refresh");
  const navigate = useNavigate();
  useEffect(() => {
    if (!refresh) {
      alert("로그인이 필요한 서비스입니다");
      return navigate("/login");
    }
  }, []);
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default PrivateLayout;
