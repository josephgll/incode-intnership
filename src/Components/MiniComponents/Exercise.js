  import React from 'react'
import ArrowUpIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownIcon from '@material-ui/icons/ArrowDownward';
import CancelIcon from '@material-ui/icons/Cancel';
import Input from '@material-ui/core/Input';
import Fab from '@material-ui/core/Fab';
import {connect} from 'react-redux'
import {deleteEx} from '../../Actions/exercisesActions'
import {moveUp} from '../../Actions/exercisesActions'
import {moveDown} from '../../Actions/exercisesActions'
import {updateExName} from '../../Actions/exercisesActions'
import {updateExMeasure} from '../../Actions/exercisesActions'




class Exercise extends React.Component {


  deleteEx(){
    this.props.deleteEx(this.props.index)
  }

  moveUp(){
    if (this.props.index > 0)
    {this.props.moveUp(this.props.index)
  }
  }

  moveDown(){
    this.props.moveDown(this.props.index)
  }

  handleButton(e){
    let exName = e.target.value;
    this.props.updateExName([this.props.index, exName ])
  }

  handleSelect(e){
    let value = e.target.value;
    this.props.updateExMeasure([this.props.index, value ])
  }

  render(){


    return   <div style={{display: "grid", justifyItems: "center"}}>
        <div style={{display: "grid", borderBottom: "1px solid lightgray", width: "90%", gridTemplateColumns: "33% 20% 47%", paddingBottom: "1em", paddingTop: "3em", alignItems: "center", gridColumnGap: "1em"}}>
          <div style={{display: "grid", gridTemplateRows: "50% 50%", gridAlignItems:"center", height: "100%"}}>
            <label htmlFor="exName" style={{color: "gray"}}>Exercise Name</label>
            <Input   id="exName" value={this.props.name} onChange={this.handleButton.bind(this)}   />
          </div>
          <div style={{display: "grid", gridTemplateRows: "50% 50%", gridAlignItems:"center", height: "100%"}}>
            <label htmlFor="select" style={{color: "gray"}}>Measurement type</label>
            <select style={{border: "none", borderBottom: "1px solid black", backgroundColor: "white", fontSize: 15, fontWeight: 50}} id="select" value={this.props.measurement} onChange={this.handleSelect.bind(this)}  >
              <option value="kilograms" >Kilograms</option>
              <option value="pounds" >Pounds</option>
            </select>
        </div>
        <div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr", width: "60%", justifyItems:"center"}}>
          <Fab onClick={this.moveUp.bind(this)} size="small" color="primary" aria-label="Add" variant="extended" style={{width: "6em", height: "3em", borderRadius: "5%", backgroundColor: "blue"}}>
            <ArrowUpIcon />
          </Fab>
          <Fab onClick={this.moveDown.bind(this)} size="small" color="primary" aria-label="Add" variant="extended" style={{width: "6em", height: "3em", borderRadius: "5%", backgroundColor: "blue"}}>
            <ArrowDownIcon />
          </Fab>
          <Fab  onClick={this.deleteEx.bind(this)} size="small"  aria-label="Add" variant="extended" style={{width: "6em", height: "3em", borderRadius: "5%", backgroundColor: "orange"}}>
            <CancelIcon style={{color: "white"}} />
          </Fab>
        </div>
        </div>
      </div>
  }
}

const mapStateToProps = state =>{
  return {
    exercises: state.exercisesReducer
  }
}

const mapDispatchToProps = dispatch =>{

    return {
      deleteEx: (index) =>{
        dispatch(deleteEx(index))
      },
      moveUp: (index) =>{
        dispatch(moveUp(index))
      },
      moveDown: (index) =>{
        dispatch(moveDown(index))
      },
      updateExName: (exName) =>{
        dispatch(updateExName(exName))
      },
      updateExMeasure: (exMeasure) =>{
        dispatch(updateExMeasure(exMeasure))
      }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Exercise)
