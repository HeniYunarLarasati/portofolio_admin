import React from 'react';
import { Field } from 'redux-form';
import { useSelector } from 'react-redux';

export const TextField = (props) => {
  const { input, inputProps, meta } = props;
  const { dirty, error, touched } = meta;
  return (
    <>
      {inputProps.label && <label>{inputProps.label}</label>}
      <input {...input} {...inputProps} />
      {error && (dirty || touched) && <small className="error-field">{error}</small>}
    </>
  );
};

const LoginForm = (props) => {
  const { handleSubmit, invalid } = props;
  const { isLoadingLogin, message } = useSelector((s) => s.login);
  const disabled = invalid || isLoadingLogin;

  const renderTextField = (name, placeholder, label) => {
    const inputProps = {
      placeholder,
      autoComplete: 'off',
    };
    return (
      <div className="input-group">
        <p>{label}</p>
        <Field component={TextField} inputProps={inputProps} name={name} />
      </div>
    );
  };

  const renderPasswordField = (name, placeholder, label) => {
    const inputProps = {
      placeholder,
      autoComplete: 'off',
      type: 'password',
    };
    return (
      <div className="input-group">
        <p>{label}</p>
        <Field component={TextField} type="password" inputProps={inputProps} name={name} />
      </div>
    );
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <div className="col-md-12">
        {renderTextField('email', 'Email', 'Email')}
        {renderPasswordField('password', 'Password', 'Password')}
        {message !== 'SUKSESLOGIN' && message}
        <button disabled={disabled} type="submit" className="button-submit">
          {isLoadingLogin ? 'Loading...' : 'Login'}
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
