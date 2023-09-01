type Product = {
  id: number;
  name: string;
  image: string;
  price: number;
  description: string;
  category: string;
  quantity: number;
  rating: number;
};

type SignUpUser = {
  first_name: string;
  last_name: string;
  email: string;
  country_code: string;
  phone_number: string;
  role: string;
  password: string;
};

type SignInUser = {
  email: string;
  password: string;
};

export type { Product, SignInUser, SignUpUser };
