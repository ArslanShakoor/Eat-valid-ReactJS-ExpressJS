import { FETCH_REVIEWS, MY_REVIEWS, ONE_REVIEW } from './types';
import Alert from 'react-s-alert';

export const fetchReviews = id => async dispatch => {
  const res = await axios.get(`/api/reviewsRestaurant/${id}`);
  dispatch({ type: FETCH_REVIEWS, payload: res });
};
export const myReviews = id => async dispatch => {
  const res = await axios.get(`/api/myReviews`);
  console.log(res);
  dispatch({ type: MY_REVIEWS, payload: res });
};
export const fetchOneReview = id => async dispatch => {
  const res = await axios.get(`/api/oneReview/${id}`);
  dispatch({ type: ONE_REVIEW, payload: res });
};

export const updateRating = (values, id, history) => async dispatch => {
  const res = await axios.put(`/api/updateReview/${id}`, values);
  Alert.info('Your review has successfully updated!', {
    position: 'bottom'
  });
  history.push('/');
};

export const deleteRating = (id, history) => async dispatch => {
  const res = await axios.put(`/api/deleteReview/${id}`);
  Alert.info('Your review has deleted!', {
    position: 'bottom'
  });
  history.push('/');
};

export const submitRating = (values, history) => async dispatch => {
  try {
    const res = await axios.post('/api/ratings', values);
    Alert.success('Thank you! Your review has successfully submitted', {
      position: 'bottom'
    });
  } catch (err) {
    console.log(err);
    Alert.error('You must need to logged to submit a Review', {
      position: 'bottom'
    });
  }

  history.push('/');
};
