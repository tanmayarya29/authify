import axios from "axios";
import { Product } from "../constant/types";

const URL = import.meta.env.VITE_BACKEND_URL;

// accessing protected route
export const getProducts = (token: string) => {
  const PRODUCTS_URL = URL + "/products/";
  return axios.get(PRODUCTS_URL, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const getProductById = (id: string) => {
  const PRODUCT_URL = URL + `/products/${id}`;
  return axios.get(PRODUCT_URL);
};

export const postProducts = (product: Product) => {
  const PRODUCT_CREATE_URL = URL + "/products/create";
  return axios.post(PRODUCT_CREATE_URL, {
    ...product,
  });
};

export const putProducts = (id: string, product: Product) => {
  const PRODUCT_UPDATE_URL = URL + `/products/update/${id}`;
  return axios.put(PRODUCT_UPDATE_URL, { ...product });
};

export const deleteProduct = (id: string) => {
  const PRODUCT_DELETE_URL = URL + `/products/delete/${id}`;
  return axios.delete(PRODUCT_DELETE_URL);
};
