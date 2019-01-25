const workoutsReducer = (state = {
  date: ''
},action) =>{
  switch (action.type){
    case "SETWORKOUTDATE":
    state = {
      ...state,
      date: action.payload
    }
    break;



    default:
    break;
  }
  return state;
}

export default workoutsReducer;
