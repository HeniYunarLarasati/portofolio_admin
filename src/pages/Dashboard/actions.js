import { LOADING, FAILED, SUCCESS } from './constants';
import { getProfile } from '../../utils/fetch';

export const fetchProfile = () => {
  return (dispatch) => {
    const key = 'UserDetail';
    dispatch(loadingAction(true, key));

    getProfile()
      .then((data) => {
        dispatch(successAction(data.data, key));
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

function successAction(data, key) {
  return { type: SUCCESS, data, key };
}
