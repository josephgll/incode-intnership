import React, { Fragment } from "react";
import { connect } from "react-redux";
import { getLogout } from "../Actions/logedInUserActions";
import { Link } from "react-router-dom";
import InfiniteCalendar, {
  withMultipleDates,
  Calendar,
  defaultMultipleDateInterpolation
} from "react-infinite-calendar";
import "react-infinite-calendar/styles.css";
import SignOutLogo from "./MiniComponents/SignOutLogo";
import { setWorkoutDate } from "../Actions/workoutsActions";
import { saveDate } from "../Actions/workoutsActions";
import { deleteDate } from "../Actions/workoutsActions";

const moment = require("moment");

class Dashboard extends React.Component {
  calendar(date) {
    let data = moment(date).format("MM-DD-YYYY");
    this.props.saveDate(data);
    this.props.setWorkoutDate(data);

    if (!this.props.workouts[data]) {
      this.props.history.push(`/newworkout`);
    } else {
      this.props.history.push("/editworkout");
    }
  }

  componentDidMount() {
    for (let i = 0; i < this.props.workouts.savedDates.length; i++) {
      if (!this.props.workouts[this.props.workouts.savedDates[i]]) {
        this.props.deleteDate(i);
      } else if (
        this.props.workouts[this.props.workouts.savedDates[i]] &&
        this.props.workouts[this.props.workouts.savedDates[i]].exName.length ===
          0
      ) {
        this.props.deleteDate(i);
      }
    }
  }

  componentDidUpdate() {
    for (let i = 0; i < this.props.workouts.savedDates.length; i++) {
      if (!this.props.workouts[this.props.workouts.savedDates[i]]) {
        this.props.deleteDate(i);
      } else if (
        this.props.workouts[this.props.workouts.savedDates[i]] &&
        this.props.workouts[this.props.workouts.savedDates[i]].exName.length ===
          0
      ) {
        this.props.deleteDate(i);
      }
    }
  }

  render() {
    return (
      <Fragment>
        <div>
          <div style={{ float: "left", margin: 50, fontSize: 25 }}>
            Dashboard
          </div>
          <div
            style={{
              float: "right",
              display: "flex",
              alignItems: "center",
              padding: "40px"
            }}
          >
            <p>{this.props.logedInUser.logedInUser}</p>
            <SignOutLogo />
          </div>
        </div>
        <div style={{ marginTop: 120, marginLeft: 100 }}>
          <Link to="/newexercise" style={{ textDecoration: "none" }}>
            <input
              type="button"
              value="ADD NEW EXERCISE"
              style={{
                width: 150,
                height: 40,
                marginLeft: -108,
                marginBottom: 5,
                backgroundColor: "violet",
                color: "white",
                border: "none",
                borderRadius: "2%"
              }}
            />
          </Link>
          <Link to="/newworkout">
            <input
              type="button"
              value="ADD NEW WORKOUT"
              style={{
                width: 150,
                height: 40,
                marginLeft: 100,
                marginBottom: 5,
                backgroundColor: "violet",
                color: "white",
                border: "none",
                borderRadius: "2%"
              }}
            />
          </Link>
          <InfiniteCalendar
            onSelect={this.calendar.bind(this)}
            theme={{
              selectionColor: "violet",
              textColor: {
                default: "#333",
                active: "#FFF"
              },
              weekdayColor: "violet",
              headerColor: "violet",
              floatingNav: {
                background: "rgba(81, 67, 138, 0.96)",
                color: "#FFF",
                chevron: "#FFA726"
              }
            }}
            Component={withMultipleDates(Calendar)}
            selected={this.props.workouts.savedDates}
            interpolateSelection={defaultMultipleDateInterpolation}
          />
        </div>
        <div
          style={{
            marginTop: 80,
            borderTop: "1px solid gray",
            display: "flex"
          }}
        >
          <div
            style={{
              width: "80%",
              display: "flex",
              alignItems: "center",
              height: 75,
              justifyContent: "space-around"
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

            <button
              style={{
                backgroundColor: "lightgray",
                border: "none",
                fontSize: 15
              }}
            >
              NEW WORKOUT
            </button>

            <button
              style={{
                backgroundColor: "lightgray",
                border: "none",
                fontSize: 15
              }}
            >
              EDIT WORKOUT
            </button>
          </div>
          <div
            style={{
              alignSelf: "flex-end",
              justifySelf: "flex-end",
              width: "30%"
            }}
          >
            (c)2019 Gleb Amelichkin, made with love for a better web
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    logedInUser: state.logedInUserReducer,
    workouts: state.workoutsReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getLogout: logout => {
      dispatch(getLogout(logout));
    },
    setWorkoutDate: date => {
      dispatch(setWorkoutDate(date));
    },
    saveDate: date => {
      dispatch(saveDate(date));
    },
    deleteDate: date => {
      dispatch(deleteDate(date));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
