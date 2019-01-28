import React from 'react';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountCircle from '@material-ui/icons/AccountCircle';
import {Link, withRouter} from 'react-router-dom';




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







export default withRouter(ListItemComposition)
