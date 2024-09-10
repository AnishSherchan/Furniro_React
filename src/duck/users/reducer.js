import * as ACTION_TYPES from "./types";

const INITIAL_STATE = {
  username: "",
};

export const userReducer = (state, action) => {
  state = state || INITIAL_STATE;

  switch (action.type) {
    case ACTION_TYPES.GET_USERNAME:
      return Object.assign({}, state, { username: action.payload });

    default:
      return state;
  }
};
