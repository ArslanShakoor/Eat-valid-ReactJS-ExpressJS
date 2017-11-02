import { FETCH_REVIEWS } from './types';

export const fetchReviews = id => async dispatch => {
  const res = await axios.get(`/api/reviewsRestaurant/${id}`);
  console.log(res);
  dispatch({ type: FETCH_REVIEWS, payload: res });
};
