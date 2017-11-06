import { FEATURED_RESTAURANT } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case FEATURED_RESTAURANT:
      console.log('featured.....');
      return action.payload.data;
    default:
      return state;
  }
}
