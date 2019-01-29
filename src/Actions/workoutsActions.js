export function setWorkoutDate(date) {
  return {
    type: "SETWORKOUTDATE",
    payload: date
  };
}

export function newWorkout(exercise) {
  return {
    type: "NEWWORKOUT",
    payload: exercise
  };
}

export function addToWorkout(exercise) {
  return {
    type: "ADDTOWORKOUT",
    payload: exercise
  };
}

export function changeEx(exercise) {
  return {
    type: "CHANGENAMEANDMEASURE",
    payload: exercise
  };
}

export function changeRepeats(repeats) {
  return {
    type: "CHANGEREPEATS",
    payload: repeats
  };
}

export function changeMeasureQ(measureq) {
  return {
    type: "CHANGEMEASUREQ",
    payload: measureq
  };
}

export function deleteWorkout(workout) {
  return {
    type: "WORKOUTDELETE",
    payload: workout
  };
}

export function moveUpWorkout(workout) {
  return {
    type: "WORKOUTMOVEUP",
    payload: workout
  };
}

export function moveDownWorkout(workout) {
  return {
    type: "WORKOUTMOVEDOWN",
    payload: workout
  };
}

export function saveDate(date) {
  return {
    type: "SAVEDDATES",
    payload: date
  };
}

export function deleteDate(date) {
  return {
    type: "DELETESAVEDDATE",
    payload: date
  };
}

export function updateMeasure(measure) {
  return {
    type: "UPDATEMEASURE",
    payload: measure
  };
}
