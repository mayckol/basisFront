import axios from "axios";

const api = axios.create({
  baseURL: "http://test.basis.com/api/",
});

const token = localStorage.getItem("access_token");
if (token) {
  api.defaults.headers.common["Authorization"] = "Bearer" + " " + token;
}

export default api;
