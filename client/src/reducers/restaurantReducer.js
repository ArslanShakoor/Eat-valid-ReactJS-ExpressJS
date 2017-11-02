import { FEATURED_RESTAURANT } from '../actions/types';
import { FIELD_RESTAURANT } from '../actions/types';
import { FETCH_INFO } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_INFO:
      return action.payload.data;
    case FEATURED_RESTAURANT:
      return action.payload.data;
    case FIELD_RESTAURANT:
      return action.payload.data;

    default:
      return state;
  }
}
