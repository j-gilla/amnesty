
import React from 'react';
import {connect} from 'react-redux';
import {updateProfile, requestUpdateProfile, responseUpdateProfile} from '../../actions';
import UserProfileForm from './UserProfileForm';
import {SubmissionError} from 'redux-form';
import fetch from 'isomorphic-fetch';
import '../../style/UserProfile.scss';

var UserProfile = (props) => {
  return (
    <div className="container-fluid profile">
      <div className="row">
        <div className="col-sm-6 col-sm-offset-3">
          <h1>Your Profile</h1>
          <p className="profile-des">Keep your Amnesty Decoders Profile up to date</p>
          <UserProfileForm onSubmit={props.handleSubmit}></UserProfileForm>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return{
    initialValues: Object.assign({}, state.user)
  }
}
const mapDispatchToProps = dispatch => {
  return {
    handleSubmit: (values) => {
      dispatch(requestUpdateProfile);

      return fetch('https://api.myjson.com/bins/12l7wx')
        .then(res => res.json())
        .then(function (json) {
          dispatch(responseUpdateProfile());
          throw new SubmissionError({username: 'Something wrong with username', error: 'Login failed!'})
        });
    }
  }
}

UserProfile = connect(mapStateToProps, mapDispatchToProps)(UserProfile);
export default UserProfile;