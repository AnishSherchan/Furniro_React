import * as TYPES from "./types";

const INITIAL_STATE = {
  payload: [],
  loading: false,
  error: {},
};

export const contactReducer = (state, action) => {
  state = state || INITIAL_STATE;

  switch (action.type) {
    case TYPES.ADD_CONTACT_REQUEST:
      return Object.assign({}, state, { loading: true });

    case TYPES.ADD_CONTACT_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        payload: action.payload,
        error: {},
      });

    case TYPES.ADD_CONTACT_ERROR:
      return Object.assign({}, state, {
        loading: false,
        error: action.error,
      });

    default:
      return state;
  }
};
