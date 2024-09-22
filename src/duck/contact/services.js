import * as Action from "./actions";

export const addContact = (value) => {
  return (dispatch) => {
    dispatch(Action.AddContactRequest());
    fetch("https://fakestoreapi.com/users", {
      method: "POST",
      body: JSON.stringify({
        email: value.email,
        username: value.name,
        password: value.message,
        name: {
          firstname: "John",
          lastname: "Doe",
        },
        address: {
          city: "kilcoole",
          street: "7835 new road",
          number: 3,
          zipcode: "12926-3874",
          geolocation: {
            lat: "-37.3159",
            long: "81.1496",
          },
        },
        phone: value.subject,
      }),
    })
      .then((res) => res.json())
      .then((data) => dispatch(Action.AddContactSuccess(data)))
      .catch((error) => dispatch(Action.AddContactError(error)));
  };
};
