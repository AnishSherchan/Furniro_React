import * as ACTION_TYPES from "./types";

export const Fetch_Products_Request = () => {
  return {
    type: ACTION_TYPES.FETCH_PRODUCTS_REQUEST,
    // payload: ,
  };
};

export const Fetch_Products_Request_Success = (data) => {
  return {
    type: ACTION_TYPES.FETCH_PRODUCTS_REQUEST_SUCCESS,
    payload: data,
  };
};

export const Fetch_Products_Request_Failure = (error) => {
  return {
    type: ACTION_TYPES.FETCH_PRODUCTS_REQUEST_ERROR,
    error,
  };
};
