import axios from "axios";
import { SignInUser, SignUpUser } from "../constant/types";

const URL = process.env.BACKEND_URL;

const userApi = {
  postLogin: async (user: SignInUser) => {
    const LOGIN_URL = URL + "/auth/login";
    axios
      .post(LOGIN_URL, { user })
      .then((res) => {
        localStorage.setItem(
          "access-token-" + user.email,
          res.data.accessToken
        );
        return res.data;
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
        return res.data;
      })
      .catch((err) => {
        return err;
      });
  },
  getLogOut: async (email: string, refreshToken: string) => {
    const LOGOUT_URL = URL + "/auth/logout";
    axios
      .post(LOGOUT_URL, { token: refreshToken })
      .then((res) => {
        localStorage.removeItem("access-token-" + email);
        return res.data;
      })
      .catch((err) => console.log(err));
  },
};

export default userApi;
