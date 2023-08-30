export interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  description: string;
  category: string;
  quantity: number;
  rating: number;
}

export interface SignUpUser {
  first_name: string;
  last_name: string;
  email: string;
  country_code: string;
  phone_number: string;
  role: string;
  password: string;
}

export interface SignInUser {
  email: string;
  password: string;
}
