import * as ACTION from "./action";

export const fetchUsername = () => {
  return (dispatch) => {
    dispatch(ACTION.getUserName("Anish"));
  };
};
