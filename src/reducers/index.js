import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import Login from '../pages/Login/reducer';
import Dashboard from '../pages/Dashboard/reducer';

const rootReducer = combineReducers({
  form: formReducer,
  routing: routerReducer,
  login: Login,
  dashboard: Dashboard,
});

export default rootReducer;
