import React from 'react';
import {connect} from 'react-redux';
import logo from '../images/amnestylogo-yellow.png';
import logo2x from '../images/amnestylogo-yellow@2x.png';
import logo3x from '../images/amnestylogo-yellow@3x.png';
import '../style/Navbar.scss';

import {Link} from 'react-router';
import {changeProject} from '../actions/changeProject';

class Navbar extends React.Component {
  constructor(props){
    super(props);
  }

  handleClickProject(project){
    project != this.props.project && (this.props.changeProject(project));
  }

  render() {
    return (
      <div className="container-fluid header">
        <nav className="header-menu">
          <a href="https://www.amnesty.org/" target="_blank" className="logo pull-left">
            <img src={logo} srcSet={logo2x + " 2x, " + logo3x + " 3x"} />
          </a>
          <div className="clearfix header-center">
              <div className="pull-left dropdown project-navigation">
                <a href="" className="dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                  DECODE NIGER DELTA: {this.props.project.toUpperCase()}
                  <span className="caret" />
                </a>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                  <li className="sub-menu"><a href="#"><i className="icon ion-home"></i> AMNESTY DECODERS</a></li>
                  <li role="separator" className="divider" />
                  <li><a href="#"><i className="icon ion-home"></i>DECODE NIGER DELTA</a></li>
                  <li onClick={() => this.handleClickProject('cause')}><Link to="/?project=cause">∙ CAUSE</Link></li>
                  <li onClick={() => this.handleClickProject('location')}><Link to="/?project=location">∙ LOCATION</Link></li>
                  <li onClick={() => this.handleClickProject('image')}><Link to="/?project=image">∙ IMAGES</Link></li>
                </ul>
              </div>
            <div className="pull-right text-right global-navigation">
              <ul>
                <li><a href="#">DISCUSS</a></li>
                <li>
                  <div className="dropdown">
                    <a href="#" className="dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                      <i className="icon ion-person" />
                      <span>&nbsp;{this.props.user.fullname}</span>
                      <span className="caret" />
                    </a>
                    <ul className="dropdown-menu mn-align-right" aria-labelledby="dropdownMenu2">
                      <li><Link to="/user/profile">PROFILE</Link></li>
                      <li><Link to="/user/account-settings">ACCOUNT SETTINGS</Link></li>
                      <li role="separator" className="divider" />
                      <li><a href="#">LOGOUT</a></li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    project: state.project,
    user: state.user
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    changeProject: (project) => {
      dispatch(changeProject(project));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
