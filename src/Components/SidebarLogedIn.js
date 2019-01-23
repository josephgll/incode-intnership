import React from 'react';
import PropTypes from 'prop-types';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SendIcon from '@material-ui/icons/Send';
import {Route, Link} from 'react-router-dom';
import SignIn from "./SignIn"
import SignUp from "./SignUp"
import Receipt from '@material-ui/icons/Receipt';


const styles = theme => ({
  menuItem: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& $primary, & $icon': {
        color: theme.palette.common.white,
      },
    },
  },
  primary: {},
  icon: {},
});

function ListItemComposition(props) {
  const { classes } = props;

  return (
      <div>
        <h1 style={{fontSize: 50, margin: 15}}>Trainer Fit</h1>
        <hr/>
      <MenuList>
        <Link to="/dashboard" style={{textDecoration: "none"}}>
          <MenuItem className={classes.menuItem}>
            <ListItemIcon className={classes.icon}>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText classes={{ primary: classes.primary }} inset primary="Dashboard" />
          </MenuItem>
      </Link>
      <Link to="/newexercise" style={{textDecoration: "none"}}>
        <MenuItem className={classes.menuItem}>
          <ListItemIcon className={classes.icon}>
            <Receipt />
          </ListItemIcon>
          <ListItemText classes={{ primary: classes.primary }} inset primary="New Exercise" />
        </MenuItem>
      </Link>
      <Link to="/editexercises" style={{textDecoration: "none"}}>
        <MenuItem className={classes.menuItem}>
          <ListItemIcon className={classes.icon}>
            <Receipt />
          </ListItemIcon>
          <ListItemText classes={{ primary: classes.primary }} inset primary="Edit Exercises" />
        </MenuItem>
      </Link><Link to="/newworkout" style={{textDecoration: "none"}}>
        <MenuItem className={classes.menuItem}>
          <ListItemIcon className={classes.icon}>
            <Receipt />
          </ListItemIcon>
          <ListItemText classes={{ primary: classes.primary }} inset primary="New Workout" />
        </MenuItem>
      </Link><Link to="/editworkout" style={{textDecoration: "none"}}>
        <MenuItem className={classes.menuItem}>
          <ListItemIcon className={classes.icon}>
            <Receipt />
          </ListItemIcon>
          <ListItemText classes={{ primary: classes.primary }} inset primary="Edit Workout" />
        </MenuItem>
      </Link>
      </MenuList>



    </div>


  );
}


ListItemComposition.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListItemComposition);
