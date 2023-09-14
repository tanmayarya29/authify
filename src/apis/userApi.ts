import axios from "axios";
import { SignInUser, SignUpUser } from "../constant/types";

const URL = import.meta.env.VITE_BACKEND_URL;

export const postLogin = (user: SignInUser) => {
  const LOGIN_URL = URL + "/auth/login";
  return axios.post(LOGIN_URL, { user });
};
export const postSignUp = (user: SignUpUser) => {
  const SIGNUP_URL = URL + "/auth/signup";
  return axios.post(SIGNUP_URL, user);
};

export const postLogOut = (email: string) => {
  const LOGOUT_URL = URL + "/auth/logout";
  return axios.post(LOGOUT_URL, { email: email });
};
export const postRegenerateAuthToken = (email: string) => {
  const TOKEN_REGENERATION_URL = URL + "/auth/token";
  return axios.post(TOKEN_REGENERATION_URL, { email: email });
};
