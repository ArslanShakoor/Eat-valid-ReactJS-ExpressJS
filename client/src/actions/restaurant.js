import { FETCH_USER } from './types';
import { FEATURED_RESTAURANT } from './types';
import { FIELD_RESTAURANT } from './types';
import axios from 'axios';

export const createRestaurant = values => async dispatch => {
  const res = await axios.post('/api/restaurants', values);
  dispatch({ type: FETCH_USER, payload: res });
};

export const featuredRestaurant = () => async dispatch => {
  const res = await axios.get('/api/featuredRestaurants');
  console.log(res);
  dispatch({ type: FEATURED_RESTAURANT, payload: res });
};

export const fetchField = () => async dispatch => {
  const res = await axios.get('/api/selectField');
  dispatch({ type: FIELD_RESTAURANT, payload: res });
};
