
import React from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import anonymousUserIcon from '../../images/anonymous-user.svg';
import renderField from '../form/renderField';
import {email, required, minLength} from '../form/validation';

let min6 = minLength(6);
let AccountSettingsForm = (props) => {
  const {error, handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field name="currentPassword" className="form-control" component={renderField} type="text" validate={[required, min6]}
             label={<span>Current Password * <i className="icon ion-ios-world-outline"></i></span>}/>
      <Field name="newPassword" className="form-control" component={renderField} type="password" validate={[required, min6]}
             label={<span>New Password * <i className="icon ion-ios-locked-outline"></i></span>}/>
      <Field name="confirmPassword" className="form-control" component={renderField} type="password" validate={[required, min6]}
             label={<span>Confirm Password * <i className="icon ion-ios-world-outline"></i></span>}/>
      <button type="submit" className="btn btn-primary btn-submit">UPDATE PASSWORD</button>
      <br/><br/><br/>
    </form>
  )
}
const validate = values => {
  const errors = {
    'confirmPassword': values.newPassword && (values.newPassword !== values.confirmPassword) ? "Oops! New passwords don't match.": undefined
  }
  // Here you can get all the fields in value object, use value.min or value.max
  return errors
}

AccountSettingsForm = reduxForm({
  form: 'accountSettings', // a unique name for this form
  validate
})(AccountSettingsForm);


export default AccountSettingsForm;