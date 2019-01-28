  import React, { Component, Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import SidebarLogedOut from './SidebarLogedOut'
import SignIn from './SignIn'
import {Route, Redirect} from 'react-router-dom'
import SignUp from "./SignUp"
import {connect} from 'react-redux'
import {signUp} from '../Actions/emailPasswordActions'
import {getLogin} from '../Actions/logedInUserActions'
import SidebarLogedIn from './SidebarLogedIn'
import Dashboard from './Dashboard'
import EditExercises from './EditExercises'
import EditWorkout from './EditWorkout'
import NewExercise from './NewExercise'
import NewWorkout from './NewWorkout'





class App extends Component {


  render() {
    return (
      <Fragment>
        {!this.props.logedInUser.ifLogedIn ?
           <Grid container style={{height: 984,   margin: 0}}>
            <Grid item xs={2}><SidebarLogedOut /></Grid>
            <Grid item xs={10} style={{background: "lightgray"}}>
              <Route exact path="/" component={SignIn}/>
              <Route  path="/signin" component={SignIn}/>
              <Route path="/signup" component={SignUp}/>
            </Grid>
          </Grid>
        :
      <Grid container style={{height: 984,   margin: 0}}>
        <Grid item xs={2}><SidebarLogedIn /></Grid>
      <Grid item xs={10} style={{background: "lightgray"}}>

        <Route exact path="/" component={Dashboard}/>
        <Route exact path="/dashboard" component={Dashboard}/>
        <Route  path="/editexercises" component={EditExercises}/>
        <Route path="/newexercise" component={NewExercise}/>

        <Route  path="/newworkout" render={() => (
          !this.props.workouts.currentDate ? (
            <Redirect to="/dashboard"/>
          ) : (
            <NewWorkout />
          )
        )}/>

        <Route  path="/editworkout" render={() => (
          !this.props.workouts.currentDate ? (
            <Redirect to="/newworkout"/>
          ) : (
            <EditWorkout />
          )
        )}/>


      </Grid>
    </Grid>}


    </Fragment>



    );
  }
}

const mapStateToProps = state =>{
  return {
      savedEmailsPasswords: state.emailPasswordReducer,
      logedInUser: state.logedInUserReducer,
      workouts: state.workoutsReducer
  }
}

const mapDispatchToProps = dispatch =>{
  return {
    signUp: (emailPassword) =>{
      dispatch(signUp(emailPassword))
    },
    getLogin: (login) =>{
      dispatch(getLogin(login))
    }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(App);
