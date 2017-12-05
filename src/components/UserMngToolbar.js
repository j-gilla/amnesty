import React from 'react';
import { connect } from 'react-redux';
import iconMenuBlack from '../images/ico-menu-white.svg';
import {Link} from 'react-router';
import activeComponent from 'react-router-active-component';


class UserMngToolbar extends React.Component {
  render() {
    var NavItem = activeComponent('li');
    return (
      <div className="container-fluid task-toolbar">
        <div className="hidden-xs left-container">
          <Link to="/">
            <span><i className="icon ion-ios-arrow-back"></i>&nbsp;BACK TO DECODING</span>
          </Link>
        </div>
        <div className="xs-menu show-xs hidden-sm hidden-md hidden-lg">
          <a href="#">
            <img src={iconMenuBlack} />
          </a>
        </div>
        <div className="hidden-xs right-container">
            <ul>
              <NavItem to="/user/profile"><span>PROFILE</span></NavItem>
              <NavItem to="/user/account-settings">
                <span className="hidden-xs">ACCOUNT SETTINGS</span>
              </NavItem>
            </ul>
        </div>
      </div>
    )
  }
}

export default UserMngToolbar;
