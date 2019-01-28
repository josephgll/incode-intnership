const workoutsReducer = (state = {
  currentDate: '',
  savedDates: []
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
        exMeasure: [action.payload[2]],
        exRepeats: [action.payload[3]],
        exMeasureQ: [action.payload[4]]
      }
    }
    break;

    case "ADDTOWORKOUT":
    state ={
      ...state,
      [action.payload[0]]: {
        ...state[action.payload[0]],
        exName: [...state[action.payload[0]].exName, action.payload[1]],
        exMeasure: [...state[action.payload[0]].exMeasure, action.payload[2]],
        exRepeats: [...state[action.payload[0]].exRepeats, action.payload[3]],
        exMeasureQ: [...state[action.payload[0]].exMeasureQ, action.payload[4]]
      }
    }
    break;

    case "CHANGENAMEANDMEASURE":
    let tempEx = [...state[action.payload[0]].exName]
    let tempMeasure = [...state[action.payload[0]].exMeasure]
    tempEx[action.payload[1]] = action.payload[2]
    tempMeasure[action.payload[1]] = action.payload[3]
    state = {
      ...state,
      [action.payload[0]]: {
        ...state[action.payload[0]],
        exName: tempEx,
        exMeasure: tempMeasure
      }
    }
    break;

    case "CHANGEREPEATS":
    let tempExRepeats = [...state[action.payload[0]].exRepeats]
    tempExRepeats[action.payload[1]] = action.payload[2]
    state = {
      ...state,
      [action.payload[0]]: {
        ...state[action.payload[0]],
        exRepeats: tempExRepeats
      }
    }
    break;

    case "CHANGEMEASUREQ":
    let tempExMeasureQ = [...state[action.payload[0]].exMeasureQ]
    tempExMeasureQ[action.payload[1]] = action.payload[2]
    state = {
      ...state,
      [action.payload[0]]: {
        ...state[action.payload[0]],
        exMeasureQ: tempExMeasureQ
      }
    }
    break;

    case "WORKOUTDELETE":
    let tempEx1 = [...state[action.payload[0]].exName]
    let tempExMeasure1 = [...state[action.payload[0]].exMeasure]
    let tempExRepeats1 = [...state[action.payload[0]].exRepeats]
    let tempExMeasureQ1 = [...state[action.payload[0]].exMeasureQ]
    tempEx1.splice(action.payload[1],1)
    tempExMeasure1.splice(action.payload[1],1)
    tempExRepeats1.splice(action.payload[1],1)
    tempExMeasureQ1.splice(action.payload[1],1)
    state = {
      ...state,
      [action.payload[0]]: {
        ...state[action.payload[0]],
        exName: tempEx1,
        exMeasure: tempExMeasure1,
        exRepeats: tempExRepeats1,
        exMeasureQ: tempExMeasureQ1
      }
    }
    break;

    case "WORKOUTMOVEUP":
    let tempEx2 = [...state[action.payload[0]].exName]
    let tempExMeasure2 = [...state[action.payload[0]].exMeasure]
    let tempExRepeats2 = [...state[action.payload[0]].exRepeats]
    let tempExMeasureQ2 = [...state[action.payload[0]].exMeasureQ]
    tempEx2.splice(action.payload[1]-1, 0, tempEx2.splice(action.payload[1], 1)[0] )
    tempExMeasure2.splice(action.payload[1]-1, 0, tempExMeasure2.splice(action.payload[1], 1)[0] )
    tempExRepeats2.splice(action.payload[1]-1, 0, tempExRepeats2.splice(action.payload[1], 1)[0] )
    tempExMeasureQ2.splice(action.payload[1]-1, 0, tempExMeasureQ2.splice(action.payload[1], 1)[0] )
    state = {
      ...state,
      [action.payload[0]]: {
        ...state[action.payload[0]],
        exName: tempEx2,
        exMeasure: tempExMeasure2,
        exRepeats: tempExRepeats2,
        exMeasureQ: tempExMeasureQ2
      }
    }
    break;

    case "WORKOUTMOVEDOWN":
    let tempEx3 = [...state[action.payload[0]].exName]
    let tempExMeasure3 = [...state[action.payload[0]].exMeasure]
    let tempExRepeats3 = [...state[action.payload[0]].exRepeats]
    let tempExMeasureQ3 = [...state[action.payload[0]].exMeasureQ]
    tempEx3.splice(action.payload[1]+1, 0, tempEx3.splice(action.payload[1], 1)[0] )
    tempExMeasure3.splice(action.payload[1]+1, 0, tempExMeasure3.splice(action.payload[1], 1)[0] )
    tempExRepeats3.splice(action.payload[1]+1, 0, tempExRepeats3.splice(action.payload[1], 1)[0] )
    tempExMeasureQ3.splice(action.payload[1]+1, 0, tempExMeasureQ3.splice(action.payload[1], 1)[0] )
    state = {
      ...state,
      [action.payload[0]]: {
        ...state[action.payload[0]],
        exName: tempEx3,
        exMeasure: tempExMeasure3,
        exRepeats: tempExRepeats3,
        exMeasureQ: tempExMeasureQ3
      }
    }
    break;

    case "SAVEDDATES":
    state = {
      ...state,
      savedDates: [...state.savedDates, action.payload]
    }
    break;

    case "DELETESAVEDDATE":
    let tempSavedDates = [...state.savedDates]
    tempSavedDates.splice(action.payload,1)
    state = {
      ...state,
      savedDates: tempSavedDates
    }
    break;

    default:
    break;
  }
  return state;
}

export default workoutsReducer;
