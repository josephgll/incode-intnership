import React from 'react';
import PropTypes from 'prop-types';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import AccountCircle from '@material-ui/icons/AccountCircle';
import SendIcon from '@material-ui/icons/Send';
import {Route, Link, withRouter} from 'react-router-dom';
import SignIn from "./SignIn"
import SignUp from "./SignUp"
import compose from 'recompose/compose'

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

class ListItemComposition extends React.Component {



  render()
  {


  return (
      <div>
        <h1 style={{fontSize: 50, margin: 15}}>Trainer Fit</h1>
        <hr/>
      <MenuList>
        <Link to="/signin" style={{textDecoration: "none"}}>
          <MenuItem style={this.props.history.location.pathname==='/signin' || this.props.history.location.pathname==='/'  ? {backgroundColor: 'lightblue'} : {backgroundColor: "white"}}>
            <ListItemIcon >
              <AccountCircle />
            </ListItemIcon>
            <ListItemText  inset primary="Sign In" />
          </MenuItem>
      </Link>
      <Link to="/signup" style={{textDecoration: "none"}}>
        <MenuItem style={this.props.history.location.pathname==='/signup' ? {backgroundColor: 'lightblue'} : {backgroundColor: "white"}}>
          <ListItemIcon >
            <AccountCircle />
          </ListItemIcon>
          <ListItemText  inset primary="Sign Up" />
        </MenuItem>
      </Link>
      </MenuList>



    </div>


  );
}
}

ListItemComposition.propTypes = {
  classes: PropTypes.object.isRequired,
};




// export default withStyles(styles)(ListItemComposition);

export default compose(
   withStyles(styles)
)(withRouter(ListItemComposition))
