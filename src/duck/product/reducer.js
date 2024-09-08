import * as ACTION_TYPES from "./types";

const INITIAL_STATE = {
  loading: false,
  payload: [],
  error: {},
};

export const productReducer = (state, action) => {
  state = state || INITIAL_STATE;

  switch (action.type) {
    case ACTION_TYPES.FETCH_PRODUCTS_REQUEST:
      return Object.assign({}, state, { loading: true });

    case ACTION_TYPES.FETCH_PRODUCTS_REQUEST_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        payload: action.payload,
        error: {},
      });

    case ACTION_TYPES.FETCH_PRODUCTS_REQUEST_ERROR:
      return Object.assign({}, state, {
        loading: false,
        error: action.error,
      });

    default:
      return state;
  }
};
