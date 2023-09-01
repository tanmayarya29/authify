import { Product, SignInUser, SignUpUser } from "./types";

export const defaultProduct: Product = {
  id: 0,
  name: "",
  image: "",
  price: 0,
  description: "",
  category: "",
  quantity: 0,
  rating: 4,
};

export const defaultSignUpUser: SignUpUser = {
  first_name: "",
  last_name: "",
  email: "",
  country_code: "+91",
  phone_number: "",
  role: "user",
  password: "",
};

export const defaultSignInUser: SignInUser = {
  email: "",
  password: "",
};
