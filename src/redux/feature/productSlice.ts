import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../components/productCard/ProductCard";
import { defaultProduct } from "../../default/default";

const initialState: Product = defaultProduct;

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
    },
  },
});

export const { setProduct } = productSlice.actions;

export default productSlice.reducer;
