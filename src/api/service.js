import axios from "axios";

const serviceHP = axios.create({
  timeout: 30000
});

serviceHP.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

serviceHP.interceptors.response.use(
  (response) => {
    console.log(response);
  },
  (error) => {
    console.log(error);
  }
);

export default serviceHP;
