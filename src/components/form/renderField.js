
import React from 'react';

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div className={'form-group' + (touched && error ? ' has-error': '') + (touched && warning ? ' has-warning' : '')}>
    <label>{label}</label>
    <input className="form-control" {...input} type={type}/>
    {touched && ((error && <span className="help-inline">{error}</span>) || (warning && <span className="help-inline">{warning}</span>))}
  </div>
)
export default renderField;