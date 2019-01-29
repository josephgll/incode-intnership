import React from "react";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import { Link, withRouter } from "react-router-dom";
import Receipt from "@material-ui/icons/Receipt";

class ListItemComposition extends React.Component {
  render() {
    return (
      <div>
        <h1 style={{ fontSize: 50, margin: 15 }}>Trainer Fit</h1>
        <hr />
        <MenuList>
          <Link to="/dashboard" style={{ textDecoration: "none" }}>
            <MenuItem
              style={
                this.props.history.location.pathname === "/dashboard" ||
                this.props.history.location.pathname === "/"
                  ? { backgroundColor: "lightblue" }
                  : { backgroundColor: "white" }
              }
            >
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText inset primary="Dashboard" />
            </MenuItem>
          </Link>
          <Link to="/newexercise" style={{ textDecoration: "none" }}>
            <MenuItem
              style={
                this.props.history.location.pathname === "/newexercise"
                  ? { backgroundColor: "lightblue" }
                  : { backgroundColor: "white" }
              }
            >
              <ListItemIcon>
                <Receipt />
              </ListItemIcon>
              <ListItemText inset primary="New Exercise" />
            </MenuItem>
          </Link>
          <Link to="/editexercises" style={{ textDecoration: "none" }}>
            <MenuItem
              style={
                this.props.history.location.pathname === "/editexercises"
                  ? { backgroundColor: "lightblue" }
                  : { backgroundColor: "white" }
              }
            >
              <ListItemIcon>
                <Receipt />
              </ListItemIcon>
              <ListItemText inset primary="Edit Exercises" />
            </MenuItem>
          </Link>
          <Link to="/newworkout" style={{ textDecoration: "none" }}>
            <MenuItem
              style={
                this.props.history.location.pathname === "/newworkout"
                  ? { backgroundColor: "lightblue" }
                  : { backgroundColor: "white" }
              }
            >
              <ListItemIcon>
                <Receipt />
              </ListItemIcon>
              <ListItemText inset primary="New Workout" />
            </MenuItem>
          </Link>
          <Link to="/editworkout" style={{ textDecoration: "none" }}>
            <MenuItem
              style={
                this.props.history.location.pathname === "/editworkout"
                  ? { backgroundColor: "lightblue" }
                  : { backgroundColor: "white" }
              }
            >
              <ListItemIcon>
                <Receipt />
              </ListItemIcon>
              <ListItemText inset primary="Edit Workout" />
            </MenuItem>
          </Link>
        </MenuList>
      </div>
    );
  }
}

export default withRouter(ListItemComposition);
