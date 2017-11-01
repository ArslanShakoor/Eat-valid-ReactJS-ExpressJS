import { combineReducers } from 'redux';
import authReducer from './authReducer';
import restaurantReducer from './restaurantReducer';
import { reducer as reduxForm } from 'redux-form';
export default combineReducers({
  auth: authReducer,
  restaurant: restaurantReducer,
  form: reduxForm
});
