
import React from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import CheckBox from '../control/CheckBox';

let NotificationSettingsForm = (props) => {
  const {error, handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div className="agreement-content">
       <CheckBox checked={true}></CheckBox>
        <div className="agree-text">I would like to receive email updates about Amnesty Decoders and other Amnesty International projects</div>
      </div>
      <button type="submit" className="btn btn-primary btn-submit">UPDATE NOTIFICATIONS PREFERENCES</button>
    </form>
  )
}

NotificationSettingsForm = reduxForm({
  form: 'notificationSettings' // a unique name for this form
})(NotificationSettingsForm);

export default NotificationSettingsForm;