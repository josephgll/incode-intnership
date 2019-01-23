import React, {Fragment} from 'react'
import {connect} from 'react-redux'
import {getLogout} from '../Actions/logedInUserActions'
import AccountCircle from '@material-ui/icons/AccountCircle';
import {Link} from 'react-router-dom'
import Calendar from 'react-calendar';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import UISelect from './MiniComponents/UISelect'




class NewExercise extends React.Component{




  render(){
    return <Fragment>
    <div>
        <div style={{float: "left",  fontSize: 25, margin:50}}>New Exercise</div>
        <div style={{float: "right", display: "flex", alignItems: "center"}}><p>{this.props.logedInUser.logedInUser}</p><AccountCircle style={{ margin: 50, fontSize: 35}} /></div>
    </div>
    <div style={{position: "absolute", background: "violet", width: 1050, height: 90, marginTop: 180, marginLeft: 120}}>
      <h2 style={{margin: 10, color: "white" ,fontWeight: "normal" }}>Create new exercise</h2>
      <h3 style={{margin: 10, color: "gray", fontWeight: "lighter"}}>Please add a new exercise name and a measurement type</h3>
    </div>
    <div style={{background: "white", width: 1100, height: 400, marginTop: 200, marginLeft: 100, borderRadius: "2%"}}>
      <div style={{display: "flex", width: "30%", flexDirection: "column"}}>
        <form>
        <div style={{display: "flex", width: "30%", flexDirection: "column"}}>
          <Input style={{marginTop: 150, marginLeft: 25, width: 1020, fontSize: 20}} placeholder="Exercise name" type="email"  required />
          <label htmlFor="select" style={{marginLeft: 25, marginTop: 50, width: 1000, color: "gray"}}>Measurement Type</label>
          <select style={{display: "block", width: 1020, marginLeft: 25, marginTop: 30, border: "none", borderBottom: "1px solid black", backgroundColor: "white", fontSize: 20, fontWeight: 100}} id="select"   required >
            <option value="kilograms">Kilograms</option>
            <option value="pounds">Pounds</option>
          </select>



        </div>
        <input type="button" value="CREATE EXERCISE" style={{width: 150, height: 40, marginLeft: 25, marginTop: 30, backgroundColor: "violet", color: "white", border: "none", fontSize: 15}} />
      </form>
      </div>
    </div>



    <div style={{marginTop: 292, borderTop: "1px solid gray", display: "flex"}}>
      <div style={{width: "80%", display: "flex", alignItems: "center", height: 75, justifyContent: "space-around"}}>
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
      </div>
      <div style={{alignSelf: "flex-end", justifySelf: "flex-end", width: "30%"}}>
        (c)2019 Gleb Amelichkin, made with love for a better web
      </div>
    </div>
  </Fragment>
  }
}

const mapStateToProps = state =>{
  return {
    logedInUser: state.logedInUserReducer
  }
}

const mapDispatchToProps = dispatch =>{
  return {
    getLogout: (logout) =>{
      dispatch(getLogout(logout))
    }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(NewExercise)
