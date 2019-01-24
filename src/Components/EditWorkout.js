import React from 'react'
import {connect} from 'react-redux'
import AccountCircle from '@material-ui/icons/AccountCircle';
import {Link} from 'react-router-dom'
import Workout from './MiniComponents/Workout'
import SignOutLogo from "./MiniComponents/SignOutLogo"

import Paper from '@material-ui/core/Paper';



class EditWorkout extends React.Component{
  render(){
    return <div style={{display: "grid", height: "100%", gridTemplateRows: "10% 80% 10%", alignItems: "center"}}>
        <div style={{display: "grid",width:"100%", gridTemplateColumns: "80% 10% 10%", alignItems: "center"   }}>
          <div style={{paddingLeft: 50, fontSize: 25}}>Edit Workout</div>
          <div style={{}}>{this.props.logedInUser.logedInUser}</div>
          <div style={{justifySelf:"center" }}><SignOutLogo /></div>
        </div>
        <div style={{paddingLeft: 50, alignSelf: "start"}}>
          <Paper style={{background: "white", width: "70%", minHeight: "10em", maxHeight: "50em", display:"grid", gridTemplateRows: "20%, 70%, 10%", alignItems: "start" , overflowY: "scroll"}}>
              <div style={{height: "7em"}}>
                <Paper style={{backgroundColor: "violet", width:"52%", position:"absolute", top: "80px", left: "380px", padding: "20px", fontSize: 20, color: "white"}}>Edit Workout</Paper>
                <button style={{height: "3em", backgroundColor: "violet", border: "none", color: "white", width: "15em", margin: "20px", marginTop: 60}}>ADD EXERCISE</button>
              </div>
              <div style={{maxHeight: "35em", overflowY: "scroll"}}>
                


              </div>

            <button style={{margin: 20, height: "3em", backgroundColor: "violet", border: "none", color: "white", width: "15em"}}>UPDATE WORKOUT</button>
          </Paper>

        </div>
          <div style={{borderTop: "1px solid gray", display: "grid", gridTemplateRows: "60% 40%" , height: "100%"}}>
            <div style={{display:"grid", gridTemplateColumns:"12% 12% 12% 12% 12% 40%", alignItems: "end", justifyItems: "center", gridColumnGap: "3em" }}>

                <Link to="/dashboard" style={{textDecoration: "none"}}>
                  <button style={{backgroundColor: "lightgray", border: "none",  fontSize: 15}}>DASHBOARD</button>
                </Link>
                <Link to="/newexercise" style={{textDecoration: "none"}}>
                <button style={{backgroundColor: "lightgray", border: "none",  fontSize: 15}}>NEW EXERCISE</button>
               </Link>
                <Link to="/editexercises" style={{textDecoration: "none"}}>
                <button style={{backgroundColor: "lightgray", border: "none",  fontSize: 15}}>EDIT EXERCISES</button>
               </Link>
                <Link to="/newworkout" style={{textDecoration: "none"}}>
                <button style={{backgroundColor: "lightgray", border: "none",  fontSize: 15}}>NEW WORKOUT</button>
               </Link>
                <Link to="/editworkout" style={{textDecoration: "none"}}>
                <button style={{backgroundColor: "lightgray", border: "none",  fontSize: 15}}>EDIT WORKOUT</button>
               </Link>

              <div></div>
            </div>

            <div style={{alignSelf: "flex-end", justifySelf: "flex-end", width: "30%", paddingBottom: "1em", paddingLeft: "2em"}}>
              (c)2019 Gleb Amelichkin, made with love for a better web
            </div>
          </div>

    </div>
  }
}

const mapStateToProps = state =>{
  return {
    logedInUser: state.logedInUserReducer
  }
}

const mapDispatchToProps = dispatch =>{
  return {

    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(EditWorkout)
