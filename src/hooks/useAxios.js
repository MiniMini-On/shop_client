import { useEffect } from "react";
import axios from "axios";
import useAuth from "./useAuth";
import { Cookie } from "../helper/Cookie";
import { useNavigate } from "react-router-dom";

export default function useAxios() {
  const { accessToken, setAccessToken, setRefreshToken, csrftoken, setCSRFToken, setUser, user } = useAuth();
  const navigate = useNavigate();
  // const cookieObj = useCookie();

  const privateAxios = axios.create({
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "X-CSRFToken": csrftoken,
    },
  });
  const refresh = Cookie.get("refresh");
  if (!accessToken && refresh) {
    axios
      .post("auth/refresh-token", { refresh: refresh })
      .then((response) => {
        setAccessToken(response.data.access);
        setCSRFToken(response.headers["x-csrftoken"]);
      })
      .catch((err) => {
        console.log(err);
        return navigate("/login");
      });
  } else if (!accessToken && !refresh) {
    alert("로그인이 필요한 서비스입니다");
    return navigate("/login");
  }
  return privateAxios;
}
