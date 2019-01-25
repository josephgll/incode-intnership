export function createEx(exercise){
  return {
    type: "ADDEXERCISE",
    payload: exercise
  }
}

export function deleteEx(index){
  return {
    type: "DELETEEXERCISE",
    payload: index
  }
}

export function moveUp(index){
  return{
    type: "MOVEUP",
    payload: index
  }
}

export function moveDown(index){
  return{
    type: "MOVEDOWN",
    payload: index
  }
}

export function updateExName(exName){
  return{
    type: "CHANGENAME",
    payload: exName
  }
}

export function updateExMeasure(exMeasure){
  return{
    type: "CHANGEMEASURE",
    payload: exMeasure
  }
}
