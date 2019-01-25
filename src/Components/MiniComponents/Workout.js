import React from 'react'
import ArrowUpIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownIcon from '@material-ui/icons/ArrowDownward';
import CancelIcon from '@material-ui/icons/Cancel';
import Input from '@material-ui/core/Input';
import Fab from '@material-ui/core/Fab';
import {connect} from 'react-redux'


class Workout extends React.Component {

  render(){
    let exNamesArray=[];
    for(let i=0; i<this.props.exercises.exercise.length; i++){
      exNamesArray.push(<option value={this.props.exercises.exercise[i]}>{this.props.exercises.exercise[i]}</option>)
    }

    return   <div style={{display: "grid", justifyItems: "center"}}>
        <div style={{display: "grid", borderBottom: "1px solid lightgray", width: "90%", gridTemplateColumns: "15% 22.5% 22.5% 5% 35%", paddingBottom: "1em", paddingTop: "3em", alignItems: "center", gridColumnGap: "1em"}}>
          <div style={{display: "grid", gridTemplateRows: "50% 50%", gridAlignItems:"center", height: "100%"}}>
            <label htmlFor="select" style={{color: "gray"}}>Exercise Name</label>
            <select style={{border: "none", borderBottom: "1px solid black", backgroundColor: "white", fontSize: 15, fontWeight: 50}} id="select"   required >
              {exNamesArray}
            </select>
        </div>
          <div style={{display: "grid", gridTemplateRows: "50% 50%", gridAlignItems:"center", height: "100%"}}>
            <label htmlFor="exName" style={{color: "gray"}}>Repeats</label>
            <Input style={{ }}  type="textfield" id="exName" required />
          </div>
          <div style={{display: "grid", gridTemplateRows: "50% 50%", gridAlignItems:"center", height: "100%"}}>
            <label htmlFor="exName" style={{color: "gray"}}>Measurement</label>
            <Input style={{ }}  type="textfield" id="exName" required />
          </div>
          <div>
            <h1 style={{fontSize: "150%"}}>{this.props.exercises.measurement[this.props.index]==="kilograms" ? <p>kg</p> : <p>p</p>}</h1>
          </div>
        <div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr", width: "90%", justifyContent:"space-between"}}>
          <Fab size="small" color="primary" aria-label="Add" variant="extended" style={{width: "6em", height: "3em", borderRadius: "5%", backgroundColor: "blue"}}>
            <ArrowUpIcon />
          </Fab>
          <Fab size="small" color="primary" aria-label="Add" variant="extended" style={{width: "6em", height: "3em", borderRadius: "5%", backgroundColor: "blue"}}>
            <ArrowDownIcon />
          </Fab>
          <Fab size="small"  aria-label="Add" variant="extended" style={{width: "6em", height: "3em", borderRadius: "5%", backgroundColor: "orange"}}>
            <CancelIcon style={{color: "white"}} />
          </Fab>
        </div>
        </div>
      </div>
  }
}

const mapStateToProps = state =>{
  return {
    logedInUser: state.logedInUserReducer,
    exercises: state.exercisesReducer
  }
}

const mapDispatchToProps = dispatch =>{
  return {

    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Workout)
