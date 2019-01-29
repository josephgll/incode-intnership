import React, { Fragment } from "react";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Input from "@material-ui/core/Input";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signUp } from "../Actions/emailPasswordActions";

class SignUp extends React.Component {
  state = {
    email: "",
    password: "",
    password2: ""
  };

  handleEmailValue(e) {
    this.setState({ email: e.target.value });
  }

  handlePasswordValue(e) {
    this.setState({ password: e.target.value });
  }

  handlePasswordValue2(e) {
    this.setState({ password2: e.target.value });
  }

  handleSubmit(e) {
    if (this.state.password !== this.state.password2) {
      this.setState({ password: "", password2: "" });
      window.alert("Passwords don't match");
      e.preventDefault();
    } else if (
      this.state.password === this.state.password2 &&
      this.state.email
    ) {
      const emailPassword = [this.state.email, this.state.password];
      this.setState({ password: "", password2: "" });
      this.props.signUp(emailPassword);
      window.alert("Data submitted");

      e.preventDefault();
    }
  }

  render() {
    return (
      <Fragment>
        <div>
          <div style={{ float: "left", margin: 50, fontSize: 25 }}>Sign Up</div>
          <div>
            <AccountCircle
              style={{ float: "right", margin: 50, fontSize: 35 }}
            />
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            background: "violet",
            width: 650,
            height: 90,
            marginTop: 180,
            marginLeft: 120
          }}
        >
          <h2 style={{ margin: 10, color: "white", fontWeight: "normal" }}>
            Register With Fit Trainer App
          </h2>
          <h3 style={{ margin: 10, color: "gray", fontWeight: "lighter" }}>
            Please enter your email and password
          </h3>
        </div>
        <div
          style={{
            background: "white",
            width: 700,
            height: 400,
            marginTop: 200,
            marginLeft: 100,
            borderRadius: "2%"
          }}
        >
          <form onSubmit={this.handleSubmit.bind(this)}>
            <div
              style={{ display: "flex", width: "30%", flexDirection: "column" }}
            >
              <Input
                style={{ marginTop: 150, marginLeft: 25, width: 320 }}
                placeholder="E-mail adress"
                type="email"
                onChange={this.handleEmailValue.bind(this)}
                value={this.state.email}
                required
              />
              <Input
                style={{
                  display: "block",
                  width: 320,
                  marginLeft: 25,
                  marginTop: 30
                }}
                placeholder="Password"
                type="password"
                onChange={this.handlePasswordValue.bind(this)}
                value={this.state.password}
                required
              />
              <Input
                style={{
                  display: "block",
                  width: 320,
                  marginLeft: 25,
                  marginTop: 30
                }}
                placeholder="Repeat password"
                type="password"
                onChange={this.handlePasswordValue2.bind(this)}
                value={this.state.password2}
                required
              />
            </div>
            <input
              type="submit"
              style={{
                width: 100,
                height: 40,
                marginLeft: 25,
                marginTop: 30,
                backgroundColor: "violet",
                color: "white",
                border: "none",
                fontSize: 20
              }}
            />
            <Link to="/signin" style={{ textDecoration: "none" }}>
              <p style={{ marginLeft: 25, color: "violet" }}>
                already have an account? sign in
              </p>
            </Link>
          </form>
        </div>
        <div style={{ marginTop: 280, borderTop: "1px solid gray" }}>
          <div style={{ width: "40%", marginTop: 30, marginLeft: 100 }}>
            <Link to="/signin" style={{ textDecoration: "none" }}>
              <button
                style={{
                  backgroundColor: "lightgray",
                  border: "none",
                  fontWeight: "bold",
                  fontSize: 15
                }}
              >
                SIGN IN
              </button>
            </Link>
            <Link to="/signup" style={{ textDecoration: "none" }}>
              <button
                style={{
                  backgroundColor: "lightgray",
                  border: "none",
                  fontWeight: "bold",
                  fontSize: 15,
                  marginLeft: 50
                }}
              >
                SIGN UP
              </button>
            </Link>
          </div>
          <div style={{ float: "right", marginRight: 20 }}>
            (c)2019 Gleb Amelichkin, made with love for a better web
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    savedEmailsPasswords: state.emailPasswordReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signUp: emailPassword => {
      dispatch(signUp(emailPassword));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
