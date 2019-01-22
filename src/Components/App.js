  import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import SidebarLogedOut from './SidebarLogedOut'
import SignIn from './SignIn'
import {Route} from 'react-router-dom'
import SignUp from "./SignUp"

const styles = {
  gridItem: {
    border: "1px solid black"
  }
}


class App extends Component {
  render() {
    return (
      <Grid container style={{height: 950, margin: 0}}>
          <Grid item xs={2}><SidebarLogedOut /></Grid>
        <Grid item xs={10} style={{background: "lightgray"}}>
          <Route exact path="/" component={SignIn}/>
          <Route  path="/signin" component={SignIn}/>
          <Route path="/signup" component={SignUp}/>
        </Grid>
      </Grid>
    );
  }
}

export default App;
