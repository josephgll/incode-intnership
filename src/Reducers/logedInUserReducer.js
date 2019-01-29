const logedInUserReducer = (
  state = {
    logedInUser: "GlebCodingGod@gmail.com",
    ifLogedIn: false
  },
  action
) => {
  switch (action.type) {
    case "LOGIN":
      state = {
        logedInUser: action.payload,
        ifLogedIn: true
      };
      break;

    case "LOGOUT":
      state = {
        ...state,
        ifLogedIn: false
      };
      break;
    default:
      break;
  }
  return state;
};

export default logedInUserReducer;
