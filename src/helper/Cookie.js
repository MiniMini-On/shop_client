import { Cookies } from "react-cookie";

const cookies = new Cookies();
export const Cookie = {
  set: (name, value) => {
    return cookies.set(name, value, { path: "/" });
  },
  get: (name) => {
    return cookies.get(name);
  },
  remove: (name) => {
    cookies.remove(name, { path: "/" });
  },
};
