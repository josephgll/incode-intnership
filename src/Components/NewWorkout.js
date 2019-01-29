import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Workout from "./MiniComponents/Workout";
import SignOutLogo from "./MiniComponents/SignOutLogo";
import Paper from "@material-ui/core/Paper";
import { newWorkout } from "../Actions/workoutsActions";
import { addToWorkout } from "../Actions/workoutsActions";

class NewWorkout extends React.Component {
  addExercise() {
    let currentDatee = this.props.workouts.currentDate;
    let exName = this.props.exercises.exercise[0];
    let exMeasure = this.props.exercises.measurement[0];
    let exRepeats = " ";
    let exMeasureQ = " ";

    if (!this.props.workouts[currentDatee]) {
      this.props.newWorkout([
        currentDatee,
        exName,
        exMeasure,
        exRepeats,
        exMeasureQ
      ]);
    } else {
      this.props.addToWorkout([
        currentDatee,
        exName,
        exMeasure,
        exRepeats,
        exMeasureQ
      ]);
    }
  }

  render() {
    let currentDatee = this.props.workouts.currentDate;
    let exCurrentArray = [];

    if (this.props.workouts[currentDatee]) {
      for (
        let i = 0;
        i < this.props.workouts[currentDatee].exName.length;
        i++
      ) {
        let mType = "";
        switch (this.props.workouts[currentDatee].exMeasure[i]) {
          case "kilograms":
            mType = "kg";
            break;

          case "pounds":
            mType = "p";
            break;

          default:
            break;
        }
        exCurrentArray.push(
          <Workout
            exName={this.props.workouts[currentDatee].exName[i]}
            exMeasure={mType}
            key={`workout${i}`}
            index={i}
            date={currentDatee}
          />
        );
      }
    }
    return (
      <div
        style={{
          display: "grid",
          height: "100%",
          gridTemplateRows: "10% 80% 10%",
          alignItems: "center"
        }}
      >
        <div
          style={{
            display: "grid",
            width: "100%",
            gridTemplateColumns: "80% 10% 10%",
            alignItems: "center"
          }}
        >
          <div style={{ paddingLeft: 50, fontSize: 25 }}>New Workout</div>
          <div style={{}}>{this.props.logedInUser.logedInUser}</div>
          <div style={{ justifySelf: "center" }}>
            <SignOutLogo />
          </div>
        </div>
        <div style={{ paddingLeft: 50, alignSelf: "start" }}>
          <Paper
            style={{
              background: "white",
              width: "70%",
              minHeight: "10em",
              maxHeight: "50em",
              display: "grid",
              gridTemplateRows: "20%, 70%, 10%",
              alignItems: "start",
              overflowY: "scroll"
            }}
          >
            <div style={{ height: "7em" }}>
              <Paper
                style={{
                  backgroundColor: "violet",
                  width: "52%",
                  position: "absolute",
                  top: "80px",
                  left: "380px",
                  padding: "20px",
                  fontSize: 20,
                  color: "white"
                }}
              >
                New Workout
              </Paper>
              <button
                onClick={this.addExercise.bind(this)}
                style={{
                  height: "3em",
                  backgroundColor: "violet",
                  border: "none",
                  color: "white",
                  width: "15em",
                  margin: "20px",
                  marginTop: 60
                }}
              >
                ADD EXERCISE
              </button>
            </div>
            <div style={{ maxHeight: "35em", overflowY: "scroll" }}>
              {exCurrentArray}
            </div>

            <button
              style={{
                margin: 20,
                height: "3em",
                backgroundColor: "violet",
                border: "none",
                color: "white",
                width: "15em"
              }}
            >
              CREATE WORKOUT
            </button>
          </Paper>
        </div>
        <div
          style={{
            borderTop: "1px solid gray",
            display: "grid",
            gridTemplateRows: "60% 40%",
            height: "100%"
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "12% 12% 12% 12% 12% 40%",
              alignItems: "end",
              justifyItems: "center",
              gridColumnGap: "3em"
            }}
          >
            <Link to="/dashboard" style={{ textDecoration: "none" }}>
              <button
                style={{
                  backgroundColor: "lightgray",
                  border: "none",
                  fontSize: 15
                }}
              >
                DASHBOARD
              </button>
            </Link>
            <Link to="/newexercise" style={{ textDecoration: "none" }}>
              <button
                style={{
                  backgroundColor: "lightgray",
                  border: "none",
                  fontSize: 15
                }}
              >
                NEW EXERCISE
              </button>
            </Link>
            <Link to="/editexercises" style={{ textDecoration: "none" }}>
              <button
                style={{
                  backgroundColor: "lightgray",
                  border: "none",
                  fontSize: 15
                }}
              >
                EDIT EXERCISES
              </button>
            </Link>
            <Link to="/newworkout" style={{ textDecoration: "none" }}>
              <button
                style={{
                  backgroundColor: "lightgray",
                  border: "none",
                  fontSize: 15
                }}
              >
                NEW WORKOUT
              </button>
            </Link>
            <Link to="/editworkout" style={{ textDecoration: "none" }}>
              <button
                style={{
                  backgroundColor: "lightgray",
                  border: "none",
                  fontSize: 15
                }}
              >
                EDIT WORKOUT
              </button>
            </Link>

            <div />
          </div>

          <div
            style={{
              alignSelf: "flex-end",
              justifySelf: "flex-end",
              width: "30%",
              paddingBottom: "1em",
              paddingLeft: "2em"
            }}
          >
            (c)2019 Gleb Amelichkin, made with love for a better web
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    logedInUser: state.logedInUserReducer,
    exercises: state.exercisesReducer,
    workouts: state.workoutsReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    newWorkout: exercise => {
      dispatch(newWorkout(exercise));
    },
    addToWorkout: exercise => {
      dispatch(addToWorkout(exercise));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewWorkout);
