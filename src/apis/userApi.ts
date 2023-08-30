import axios from "axios";
import { SignUpUser } from "../types/types";

// const URL = process.env.BACKEND_URL;
const URL = "http://localhost:8800";

type credentials = {
  email: string;
  password: string;
};

const userApi = {
  postLogin: async (user: credentials) => {
    const LOGIN_URL = URL + "/auth/login";
    axios
      .post(LOGIN_URL, { user })
      .then((res) => {
        localStorage.setItem(
          "access-token-" + user.email,
          res.data.accessToken
        );
        return "success";
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  },
  postSignUp: async (user: SignUpUser) => {
    const SIGNUP_URL = URL + "/auth/signup";
    axios
      .post(SIGNUP_URL, user)
      .then((res) => {
        console.log(res);
        return res;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  },
  getLogOut: async (email: string, refreshToken: string) => {
    const LOGOUT_URL = URL + "/auth/logout";
    axios
      .post(LOGOUT_URL, { token: refreshToken })
      .then((res) => {
        localStorage.removeItem("access-token-" + email);
        console.log(res);
      })
      .catch((err) => console.log(err));
  },
};

export default userApi;
