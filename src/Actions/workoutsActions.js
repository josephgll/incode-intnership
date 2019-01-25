export function setWorkoutDate(date){
  return {
    type: "SETWORKOUTDATE",
    payload: date
  }
}

export function newWorkout(exercise){
  return {
    type: "NEWWORKOUT",
    payload: exercise
  }
}

export function addToWorkout(exercise){
  return {
    type: "ADDTOWORKOUT",
    payload: exercise
  }
}
