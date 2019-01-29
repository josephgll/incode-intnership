const emailPasswordReducer = (
  state = {
    email: ["asd@gmail.com"],
    password: ["12345"],
    vCode: [123],
    isVerified: [true]
  },
  action
) => {
  switch (action.type) {
    case "SIGNUP":
      state = {
        ...state,
        email: [...state.email, action.payload[0]],
        password: [...state.password, action.payload[1]],
        vCode: [...state.vCode, action.payload[2]],
        isVerified: [...state.isVerified, action.payload[3]]
      };
      break;

    case "VERIFY":
      let tempVerified = [...state.isVerified];
      tempVerified[action.payload[0]] = action.payload[1];
      state = {
        ...state,
        isVerified: tempVerified
      };
      break;

    case "REMOVEUNVERIFIED":
      let tempEmail2 = [...state.email];
      let tempPassword2 = [...state.password];
      let tempVCode2 = [...state.vCode];
      let tempIsVerified2 = [...state.isVerified];
      tempEmail2.splice(action.payload, 1);
      tempPassword2.splice(action.payload, 1);
      tempVCode2.splice(action.payload, 1);
      tempIsVerified2.splice(action.payload, 1);
      state = {
        ...state,
        email: tempEmail2,
        password: tempPassword2,
        vCode: tempVCode2,
        isVerified: tempIsVerified2
      };
      break;

    default:
      break;
  }
  return state;
};

export default emailPasswordReducer;
