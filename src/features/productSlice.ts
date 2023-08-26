
import { createSlice } from "@reduxjs/toolkit";
import { defaultProduct } from "../components/productCard/ProductCard";
export const productSlice = createSlice({
  name: "product",
  initialState: defaultProduct,
  reducers: {
    handleChange: (state, action) => {
      console.log(action.payload);
      
      state.name = action.payload.name ;
      state.price = action.payload.price ;
      state.description = action.payload.description ;
      state.category = action.payload.category ;
      state.quantity = action.payload.quantity ;
      state.rating = action.payload.rating ;
      state.reviews = action.payload.reviews ;
     
    },
  },
});

export const { handleChange } = productSlice.actions;
export default productSlice.reducer;
