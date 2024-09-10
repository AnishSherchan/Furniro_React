import { combineReducers } from "@reduxjs/toolkit";
import { productReducer } from "../duck/product/reducer";
import { userReducer } from "../duck/users/reducer";

const appReducer = combineReducers({
  product: productReducer,
  user: userReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
