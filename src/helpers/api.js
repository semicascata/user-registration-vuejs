import axios from "axios";

const api = axios.create({
  // baseURL: "http://localhost:3003/api/v1/usreg/", // dev-local url
  baseURL: "https://user-registration-nestjs.herokuapp.com/api/v1/usreg/", // heroku server
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
