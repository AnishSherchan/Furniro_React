import * as TYPES from "./types";

export const AddContactRequest = () => {
  return {
    type: TYPES.ADD_CONTACT_REQUEST,
  };
};

export const AddContactSuccess = (data) => {
  return {
    type: TYPES.ADD_CONTACT_SUCCESS,
    payload: data,
  };
};

export const AddContactError = (error) => {
  return {
    type: TYPES.ADD_CONTACT_ERROR,
    error,
  };
};
