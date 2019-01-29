import React, { Fragment } from "react";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Input from "@material-ui/core/Input";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { signUp } from "../Actions/emailPasswordActions";
import { getLogin } from "../Actions/logedInUserActions";
import { verify } from "../Actions/emailPasswordActions";

class EmailVerification extends React.Component {
  state = {
    email: "",
    vCode: ""
  };

  handleEmailValue(e) {
    this.setState({ email: e.target.value });
  }

  handleVCodeValue(e) {
    this.setState({ vCode: e.target.value });
  }

  handleVerification(e) {
    if (
      parseInt(this.state.vCode, 10) ===
      this.props.savedEmailsPasswords.vCode[
        this.props.savedEmailsPasswords.email.length - 1
      ]
    ) {
      window.alert("Your email is verified");
      this.props.verify([
        this.props.savedEmailsPasswords.email.length - 1,
        true
      ]);
      this.props.history.push("/signin");
    } else {
      window.alert("Wrong verification code");
    }
    e.preventDefault();
  }

  render() {
    return (
      <Fragment>
        <div>
          <div style={{ float: "left", margin: 50, fontSize: 25 }}>
            Email Verification
          </div>
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
            Email verification to finish registration with Fit Trainer App
          </h2>
          <h3 style={{ margin: 10, color: "gray", fontWeight: "lighter" }}>
            Please confirm email adress
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
          <form onSubmit={this.handleVerification.bind(this)}>
            <div
              style={{ display: "flex", width: "30%", flexDirection: "column" }}
            >
              <Input
                style={{ marginTop: 150, marginLeft: 25, width: 320 }}
                onChange={this.handleEmailValue.bind(this)}
                value={
                  this.props.savedEmailsPasswords.email[
                    this.props.savedEmailsPasswords.email.length - 1
                  ]
                }
                required
              />
              <Input
                style={{
                  display: "block",
                  width: 320,
                  marginLeft: 25,
                  marginTop: 30
                }}
                placeholder="Verification Code"
                onChange={this.handleVCodeValue.bind(this)}
                value={this.state.vCode}
                required
              />
            </div>
            <input
              type="submit"
              value="VERIFY EMAIL"
              style={{
                width: 150,
                height: 40,
                marginLeft: 25,
                marginTop: 30,
                backgroundColor: "violet",
                color: "white",
                border: "none",
                fontSize: 17
              }}
            />
            <Link to="/signup" style={{ textDecoration: "none" }}>
              <p style={{ marginLeft: 25, color: "violet" }}>
                already have an account? sign-in
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
    savedEmailsPasswords: state.emailPasswordReducer,
    logedInUser: state.logedInUserReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signUp: emailPassword => {
      dispatch(signUp(emailPassword));
    },
    getLogin: login => {
      dispatch(getLogin(login));
    },
    verify: code => {
      dispatch(verify(code));
    }
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(EmailVerification)
);
