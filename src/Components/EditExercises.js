import React from 'react'
import {connect} from 'react-redux'
import AccountCircle from '@material-ui/icons/AccountCircle';
import {Link} from 'react-router-dom'


class EditExercises extends React.Component{
  render(){
    return <div style={{display: "grid", height: "100%", gridTemplateRows: "10% 80% 10%", alignItems: "center"}}>
        <div style={{display: "grid",width:"100%", gridTemplateColumns: "80% 10% 10%", alignItems: "center"   }}>
          <div style={{paddingLeft: 50, fontSize: 25}}>Edit Exercises</div>
          <div style={{}}>{this.props.logedInUser.logedInUser}</div>
          <div style={{justifySelf:"center" }}><AccountCircle style={{fontSize: 35}} /></div>
        </div>
        <div style={{paddingLeft: 50}}>
          <div style={{background: "white", width: "70%", minHeight: "10em", maxHeight: "50em"}}>

            <button style={{margin: 20, height: "3em", backgroundColor: "violet", border: "none", color: "white"}}>UPDATE EXERCISES</button>
          </div>

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


export default connect(mapStateToProps, mapDispatchToProps)(EditExercises)
