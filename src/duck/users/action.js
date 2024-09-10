import * as ACTIONS_TYPE from "./types";

export const getUserName = (data) => {
  return {
    type: ACTIONS_TYPE.GET_USERNAME,
    payload: data,
  };
};
