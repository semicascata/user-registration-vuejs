import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3003/api/v1/usreg/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
