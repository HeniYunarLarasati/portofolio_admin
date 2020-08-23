import React, { useState, useEffect } from 'react';
import './styles.css';
import LoginForm from '../../components/forms/LoginForm';
import { login } from './actions';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const [forgot, setForgot] = useState(false);
  const history = useHistory();
  const handleSubmit = (values) => {
    dispatch(login(values));
  };
  const { message } = useSelector((s) => s.login);

  useEffect(() => {
    if (message === 'SUKSESLOGIN') {
      const token = localStorage.getItem('gallery-access-token');
      if (token) {
        const userData = JSON.parse(atob(token.split('.')[1]));
        localStorage.setItem('gallery-token-exp', userData.exp);
        localStorage.setItem('gallery-user-data', JSON.stringify(userData));
        history.replace('/');
      } else {
        history.replace('/login');
      }
    }
  }, [message, history]);

  useEffect(() => {
    const token = localStorage.getItem('gallery-access-token');
    if (token) {
      const userData = JSON.parse(atob(token.split('.')[1]));
      localStorage.setItem('gallery-token-exp', userData.exp);
      localStorage.setItem('gallery-user-data', JSON.stringify(userData));
      history.replace('/');
    } else {
      history.replace('/login');
    }
  }, [history]);

  return (
    <div className="login-dash">
      <div className="row">
        <div className="col-sm-8">
          <div className="login-hero"></div>
        </div>
        <div className="col-sm-4">
          <div className="login-card">
            <div className="login-title">
              {forgot ? <h1>Forgot your password?</h1> : <h1>Upload your image now!</h1>}
            </div>
            {forgot ? (
              ''
            ) : (
              <>
                <LoginForm onSubmit={handleSubmit} />
                <div
                  className="help-text"
                  onClick={(e) => {
                    e.preventDefault();
                    setForgot(true);
                  }}
                >
                  <p>Forgot your password ?</p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
