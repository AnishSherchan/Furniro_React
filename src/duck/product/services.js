import * as ACTIONS from "./action";
import { API_URL } from "../../utils/constands";

// ?Simple Export function with API call

export const fetchProductList = () => {
  return (dispatch) => {
    // Triggering Loading State
    dispatch(ACTIONS.Fetch_Products_Request());

    fetch(`${API_URL}products?limit=15`)
      .then((data) => data.json())
      .then((response) =>
        // Triggering Data Success State
        dispatch(ACTIONS.Fetch_Products_Request_Success(response))
      )
      .catch((error) =>
        // Triggering Data Failure State
        dispatch(ACTIONS.Fetch_Products_Request_Failure(error))
      );
  };
};
