import { combineReducers } from 'redux';
import authReducer from './authReducer';
import restaurantReducer from './restaurantReducer';
import reviewsReducer from './reviewsReducer';
import { reducer as reduxForm } from 'redux-form';
export default combineReducers({
  auth: authReducer,
  restaurant: restaurantReducer,
  reviews: reviewsReducer,
  form: reduxForm
});
