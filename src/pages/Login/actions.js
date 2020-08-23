import { LOADING, FAILED } from './constant';
import { loginUser } from '../../utils/fetch';

export const login = (data) => {
  return (dispatch) => {
    const key = 'Login';
    dispatch(loadingAction(true, key));

    loginUser(data)
      .then((data) => {
        localStorage.setItem('gallery-access-token', data.data.accessToken);
        dispatch(failedAction('SUKSESLOGIN', key));
        dispatch(failedAction('', 'LoginAction'));
      })
      .catch((err) => {
        dispatch(failedAction(err.msg, key));
      });
  };
};

function failedAction(message, key) {
  return { type: FAILED, message, key };
}

function loadingAction(isLoading, key) {
  return { type: LOADING, isLoading, key };
}

// function successAction(data, key) {
//   return { type: SUCCESS, data, key };
// }
