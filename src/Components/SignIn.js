import React, {Fragment} from 'react'
import AccountCircle from '@material-ui/icons/AccountCircle';
import Input from '@material-ui/core/Input';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {signUp} from '../Actions/emailPasswordActions'
import {getLogin} from '../Actions/logedInUserActions'
import store from '../store.js'

class SignIn extends React.Component
{
  state={
    email: '',
    password: ''
  }

  handleEmailValue(e){
    this.setState({email: e.target.value});
  }

  handlePasswordValue(e){
    this.setState({password: e.target.value});
  }

  handleSignIn(e){
    let loggedIn = false;
  for (let i=0;i<this.props.savedEmailsPasswords.email.length;i++){
    if(this.state.email===this.props.savedEmailsPasswords.email[i] && this.state.password===this.props.savedEmailsPasswords.password[i]){
      loggedIn = true;
      this.props.getLogin(this.state.email);
      this.props.history.push('/dashboard');
      console.log(store.getState())
      break;
    } else if (this.state.email!==this.props.savedEmailsPasswords.email[i] || this.state.password!==this.props.savedEmailsPasswords.password[i])  {
      loggedIn = false;
    }
  }
  if(loggedIn===true){
    window.alert('Logged in')
    e.preventDefault();
  } else {
    window.alert('Wrong login/password')
    this.setState({password: ''})
    e.preventDefault();
  }
}


  handleRedux(){
    console.log(window.location.href);
  }


  render()
  {return <Fragment>
  <div>
      <div style={{float: "left", margin: 50, fontSize: 25}}>Sign In</div>
      <div><AccountCircle style={{float: "right", margin: 50, fontSize: 35}} /></div>
  </div>
  <div style={{position: "absolute", background: "violet", width: 650, height: 90, marginTop: 180, marginLeft: 120}}>
    <h2 style={{margin: 10, color: "white" ,fontWeight: "normal" }} onClick={this.handleRedux.bind(this)}>Sign Into Fit Trainer App</h2>
    <h3 style={{margin: 10, color: "gray", fontWeight: "lighter"}}>Please enter your email and password</h3>
  </div>
  <div style={{background: "white", width: 700, height: 400, marginTop: 200, marginLeft: 100, borderRadius: "2%"}}>
    <form onSubmit={this.handleSignIn.bind(this)}>
    <div style={{display: "flex", width: "30%", flexDirection: "column"}}>
      <Input style={{marginTop: 150, marginLeft: 25, width: 320}} placeholder="E-mail adress" type="email" onChange={this.handleEmailValue.bind(this)} value={this.state.email}  required />
      <Input style={{display: "block", width: 320, marginLeft: 25, marginTop: 30}} placeholder="Password" type="password" onChange={this.handlePasswordValue.bind(this)} value={this.state.password} required />
    </div>
    <input type="submit" style={{width: 100, height: 40, marginLeft: 25, marginTop: 30, backgroundColor: "violet", color: "white", border: "none", fontSize: 20}} />
    <Link to="/signup" style={{textDecoration: "none"}}><p style={{marginLeft: 25, color: "violet"}}>first time user? sign up</p></Link>
  </form>
  </div>
  <div style={{marginTop: 280, borderTop: "1px solid gray"}}>
    <div style={{width: "40%", marginTop: 30, marginLeft: 100}}>
      <Link to="/signin" style={{textDecoration: "none"}}>
        <button style={{backgroundColor: "lightgray", border: "none", fontWeight: "bold", fontSize: 15}}>SIGN IN</button>
      </Link>
      <Link to="/signup" style={{textDecoration: "none"}}>
      <button style={{backgroundColor: "lightgray", border: "none", fontWeight: "bold", fontSize: 15, marginLeft: 50}}>SIGN UP</button>
     </Link>
    </div>
    <div style={{float: "right", marginRight: 20}}>
      (c)2019 Gleb Amelichkin, made with love for a better web
    </div>
  </div>
</Fragment>}}

const mapStateToProps = state =>{
  return {
      savedEmailsPasswords: state.emailPasswordReducer,
      logedInUser: state.logedInUserReducer
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

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
