import { FEATURED_RESTAURANT } from '../actions/types';
import { FIELD_RESTAURANT } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case FEATURED_RESTAURANT:
      return action.payload.data;
    case FIELD_RESTAURANT:
      return action.payload.data;
    default:
      return state;
  }
}
