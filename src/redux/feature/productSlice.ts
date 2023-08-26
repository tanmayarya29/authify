import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../components/productCard/ProductCard";

const initialState: Product = {
  name: "",
  image: "",
  price: 0,
  description: "",
  category: "",
  quantity: 0,
  rating: 0,
  reviews: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProduct: (state, action) => {
      state.name = action.payload.name;
      state.image = action.payload.image;
      state.price = action.payload.price;
      state.description = action.payload.description;
      state.category = action.payload.category;
      state.quantity = action.payload.quantity;
      state.rating = action.payload.rating;
      state.reviews = action.payload.reviews;
    },
  },
});

export const { setProduct } = productSlice.actions;

export default productSlice.reducer;
