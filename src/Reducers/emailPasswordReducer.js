const emailPasswordReducer = (state={
  email: ['asd@gmail.com'],
  password: ['12345']
}, action) =>{
  switch(action.type){
    case "SIGNUP":
    state ={
      ...state,
      email: [...state.email, action.payload[0]],
      password: [...state.password, action.payload[1]]
    }
    break;
  default:
    break;
  }
  return state;
}

export default emailPasswordReducer;
