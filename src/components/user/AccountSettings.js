
import React from 'react';
import {connect} from 'react-redux';
import {updateProfile, requestUpdateProfile, responseUpdateProfile} from '../../actions';
import AccountSettingsForm from './AccountSettingsForm';
import NotificationSettingsForm from './NotificationSettingsForm';
import {SubmissionError} from 'redux-form';
import fetch from 'isomorphic-fetch';
import '../../style/UserProfile.scss';
import '../../style/AccountSettings.scss';

var AccountSettings = (props) => {
  return (
    <div className="container-fluid profile">
      <div className="row">
        <div className="col-sm-6 col-sm-offset-3">
          <h1>Account Settings</h1>
          <p className="profile-des">Update your Amnesty Decoders password.</p>
          <AccountSettingsForm onSubmit={props.handleSubmit}></AccountSettingsForm>

          <p className="profile-des">Update your notifications settings for Amnesty Decoders.</p>
          <NotificationSettingsForm></NotificationSettingsForm>
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

AccountSettings = connect(mapStateToProps, mapDispatchToProps)(AccountSettings);
export default AccountSettings;