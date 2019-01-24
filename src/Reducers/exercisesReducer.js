

const exercisesReducer = (state = {
  exercise: [],
  measurement: [],
  index: []
}, action) => {
  switch(action.type){
    case "ADDEXERCISE":
    state = {
      ...state,
      exercise: [...state.exercise, action.payload[0]],
      measurement: [...state.measurement, action.payload[1]],
      index: [...state.index, action.payload]
    }
    break;
    case "DELETEEXERCISE":
    let tempEx = [...state.exercise]
    let tempMe = [...state.measurement]
    let tempIn = [...state.index]
    tempEx.splice(action.payload,1)
    tempMe.splice(action.payload,1)
    tempIn.splice(action.payload,1)
    state={
      ...state,
      exercise: tempEx,
      measurement: tempMe,
      index: tempIn
    }
    break;
    case "MOVEUP":
    let tempExx = [...state.exercise]
    let tempMee = [...state.measurement]
    let tempInn = [...state.index]
    tempExx.splice(action.payload-1, 0, tempExx.splice(action.payload, 1)[0] )
    tempMee.splice(action.payload-1, 0, tempMee.splice(action.payload, 1)[0] )
    tempInn.splice(action.payload-1, 0, tempInn.splice(action.payload, 1)[0] )
    state={
      ...state,
      exercise: tempExx,
      measurement: tempMee,
      index: tempInn
    }
    break;
    case "MOVEDOWN":
    let tempExxx = [...state.exercise]
    let tempMeee = [...state.measurement]
    let tempInnn = [...state.index]
    tempExxx.splice(action.payload+1, 0, tempExxx.splice(action.payload, 1)[0] )
    tempMeee.splice(action.payload+1, 0, tempMeee.splice(action.payload, 1)[0] )
    tempInnn.splice(action.payload+1, 0, tempInnn.splice(action.payload, 1)[0] )
    state={
      ...state,
      exercise: tempExxx,
      measurement: tempMeee,
      index: tempInnn
    }
    break;
    default:
    break;
  }
  return state
}

export default exercisesReducer
