import { createSlice } from "@reduxjs/toolkit";
import { defaultProduct } from "../../constant/default";
import { Product } from "../../constant/types";

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
