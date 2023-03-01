import axios from "axios";

export default function pAxios(response) {
  const pAxios = axios.create({
    headers: {
      Authorization: `Bearer ${response.data.access ? response.data.access : response.data.access_token}`,
      "X-CSRFToken": response.headers["x-csrftoken"],
    },
  });
  return pAxios;
}
