import React from "react";
import ArrowUpIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownIcon from "@material-ui/icons/ArrowDownward";
import CancelIcon from "@material-ui/icons/Cancel";
import Input from "@material-ui/core/Input";
import Fab from "@material-ui/core/Fab";
import { connect } from "react-redux";
import { changeEx } from "../../Actions/workoutsActions";
import { changeRepeats } from "../../Actions/workoutsActions";
import { changeMeasureQ } from "../../Actions/workoutsActions";
import { deleteWorkout } from "../../Actions/workoutsActions";
import { moveUpWorkout } from "../../Actions/workoutsActions";
import { moveDownWorkout } from "../../Actions/workoutsActions";
import { updateMeasure } from "../../Actions/workoutsActions";

class Workout extends React.Component {
  componentDidMount() {
    let selector = document.getElementById(`select${this.props.index}`);
    let value = selector[selector.selectedIndex].value;
    this.props.updateMeasure([
      this.props.date,
      this.props.index,
      this.props.exercises.measurement[value]
    ]);
  }

  changeExName() {
    let selector = document.getElementById(`select${this.props.index}`);
    let value = selector[selector.selectedIndex].value;
    this.props.changeEx([
      this.props.date,
      this.props.index,
      this.props.exercises.exercise[value],
      this.props.exercises.measurement[value]
    ]);
  }

  handleRepeats(e) {
    let repeats = e.target.value;
    this.props.changeRepeats([this.props.date, this.props.index, repeats]);
  }

  handleMeasurementsQ(e) {
    let measurementsQ = e.target.value;
    this.props.changeMeasureQ([
      this.props.date,
      this.props.index,
      measurementsQ
    ]);
  }

  deleteWorkout() {
    this.props.deleteWorkout([this.props.date, this.props.index]);
  }

  moveUpWorkout() {
    if (this.props.index > 0) {
      this.props.moveUpWorkout([this.props.date, this.props.index]);
    }
  }

  moveDownWorkout() {
    this.props.moveDownWorkout([this.props.date, this.props.index]);
  }

  render() {
    let exNamesArray = [];
    for (let i = 0; i < this.props.exercises.exercise.length; i++) {
      exNamesArray.push(
        <option key={`exercise${i}`} value={i}>
          {this.props.exercises.exercise[i]}
        </option>
      );
    }

    let mType = "";
    switch (this.props.workouts[this.props.date].exMeasure[this.props.index]) {
      case "kilograms":
        mType = "kg";
        break;

      case "grams":
        mType = "g";
        break;

      case "minutes":
        mType = "m";
        break;

      case "seconds":
        mType = "s";
        break;

      default:
        break;
    }

    return (
      <div style={{ display: "grid", justifyItems: "center" }}>
        <div
          style={{
            display: "grid",
            borderBottom: "1px solid lightgray",
            width: "90%",
            gridTemplateColumns: "15% 22.5% 22.5% 5% 35%",
            paddingBottom: "1em",
            paddingTop: "3em",
            alignItems: "center",
            gridColumnGap: "1em"
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateRows: "50% 50%",
              gridAlignItems: "center",
              height: "100%"
            }}
          >
            <label htmlFor="select" style={{ color: "gray" }}>
              Exercise Name
            </label>
            <select
              onChange={this.changeExName.bind(this)}
              style={{
                border: "none",
                borderBottom: "1px solid black",
                backgroundColor: "white",
                fontSize: 15,
                fontWeight: 50
              }}
              id={`select${this.props.index}`}
              value={this.props.exercises.exercise.indexOf(this.props.exName)}
              required
            >
              {exNamesArray}
            </select>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateRows: "50% 50%",
              gridAlignItems: "center",
              height: "100%"
            }}
          >
            <label htmlFor="exName" style={{ color: "gray" }}>
              Repeats
            </label>
            <Input
              onChange={this.handleRepeats.bind(this)}
              value={
                this.props.workouts[this.props.date].exRepeats[this.props.index]
              }
              style={{}}
              type="textfield"
              id="exName"
              required
            />
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateRows: "50% 50%",
              gridAlignItems: "center",
              height: "100%"
            }}
          >
            <label htmlFor="exName" style={{ color: "gray" }}>
              Measure
            </label>
            <Input
              onChange={this.handleMeasurementsQ.bind(this)}
              value={
                this.props.workouts[this.props.date].exMeasureQ[
                  this.props.index
                ]
              }
              style={{}}
              type="textfield"
              id="exName"
              required
            />
          </div>
          <div>
            <h1 style={{ fontSize: "150%" }}>{mType}</h1>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              width: "90%",
              justifyContent: "space-between"
            }}
          >
            <Fab
              onClick={this.moveUpWorkout.bind(this)}
              size="small"
              color="primary"
              aria-label="Add"
              variant="extended"
              style={{
                width: "6em",
                height: "3em",
                borderRadius: "5%",
                backgroundColor: "blue"
              }}
            >
              <ArrowUpIcon />
            </Fab>
            <Fab
              onClick={this.moveDownWorkout.bind(this)}
              size="small"
              color="primary"
              aria-label="Add"
              variant="extended"
              style={{
                width: "6em",
                height: "3em",
                borderRadius: "5%",
                backgroundColor: "blue"
              }}
            >
              <ArrowDownIcon />
            </Fab>
            <Fab
              onClick={this.deleteWorkout.bind(this)}
              size="small"
              aria-label="Add"
              variant="extended"
              style={{
                width: "6em",
                height: "3em",
                borderRadius: "5%",
                backgroundColor: "orange"
              }}
            >
              <CancelIcon style={{ color: "white" }} />
            </Fab>
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
    changeEx: exercise => {
      dispatch(changeEx(exercise));
    },
    changeRepeats: repeats => {
      dispatch(changeRepeats(repeats));
    },
    changeMeasureQ: measureq => {
      dispatch(changeMeasureQ(measureq));
    },
    deleteWorkout: workout => {
      dispatch(deleteWorkout(workout));
    },
    moveUpWorkout: workout => {
      dispatch(moveUpWorkout(workout));
    },
    moveDownWorkout: workout => {
      dispatch(moveDownWorkout(workout));
    },
    updateMeasure: measure => {
      dispatch(updateMeasure(measure));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Workout);
