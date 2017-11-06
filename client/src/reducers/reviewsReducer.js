import { FETCH_REVIEWS } from '../actions/types';
import { MY_REVIEWS } from '../actions/types';
import { ONE_REVIEW } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case MY_REVIEWS:
      return action.payload.data;
    case FETCH_REVIEWS:
      return action.payload.data[0].review;
    case ONE_REVIEW:
      return action.payload.data;
    default:
      return state;
  }
}
