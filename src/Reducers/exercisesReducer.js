

const exercisesReducer = (state = {
  exercise: ["biceps", "triceps", "running"],
  measurement: ["kilograms", "grams", "minutes"]

}, action) => {
  switch(action.type){
    case "ADDEXERCISE":
    state = {
      ...state,
      exercise: [...state.exercise, action.payload[0]],
      measurement: [...state.measurement, action.payload[1]],

    }
    break;

    case "DELETEEXERCISE":
    let tempEx = [...state.exercise]
    let tempMe = [...state.measurement]
    tempEx.splice(action.payload,1)
    tempMe.splice(action.payload,1)
    state={
      ...state,
      exercise: tempEx,
      measurement: tempMe,
    }
    break;

    case "MOVEUP":
    let tempExx = [...state.exercise]
    let tempMee = [...state.measurement]
    tempExx.splice(action.payload-1, 0, tempExx.splice(action.payload, 1)[0] )
    tempMee.splice(action.payload-1, 0, tempMee.splice(action.payload, 1)[0] )
    state={
      ...state,
      exercise: tempExx,
      measurement: tempMee,
    }
    break;

    case "MOVEDOWN":
    let tempExxx = [...state.exercise]
    let tempMeee = [...state.measurement]
    tempExxx.splice(action.payload+1, 0, tempExxx.splice(action.payload, 1)[0] )
    tempMeee.splice(action.payload+1, 0, tempMeee.splice(action.payload, 1)[0] )
    state={
      ...state,
      exercise: tempExxx,
      measurement: tempMeee,
    }
    break;

    case "CHANGENAME":
    let tempExxxx = [...state.exercise]
    tempExxxx[action.payload[0]] = action.payload[1]
    state={
      ...state,
      exercise: tempExxxx,

    }
    break;

    case "CHANGEMEASURE":
    let tempMeeee = [...state.measurement]
    tempMeeee[action.payload[0]] = action.payload[1]
    state={
      ...state,
      measurement: tempMeeee
    }
    break;

    default:
    break;
  }
  return state
}

export default exercisesReducer
