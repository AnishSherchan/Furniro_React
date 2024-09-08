import { combineReducers } from "@reduxjs/toolkit";
import { productReducer } from "../duck/product/reducer";

const appReducer = combineReducers({
  product: productReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
