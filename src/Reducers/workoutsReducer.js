const workoutsReducer = (state = {
  currentDate: ''
},action) =>{
  switch (action.type){
    case "SETWORKOUTDATE":
    state = {
      ...state,
      currentDate: action.payload
    }
    break;

    case "NEWWORKOUT":
    state ={
      ...state,
      [action.payload[0]]: {
        exName: [action.payload[1]],
        exMeasure: [action.payload[2]]
      }
    }
    break;

    case "ADDTOWORKOUT":
    const drake = action.payload[0]
    state ={
      ...state,
      [action.payload[0]]: {
        ...state[action.payload[0]],
        exName: [...state[action.payload[0]].exName, action.payload[1]],
        exMeasure: [...state[action.payload[0]].exMeasure, action.payload[2]]
      }
    }
    break;

    default:
    break;
  }
  return state;
}

export default workoutsReducer;
