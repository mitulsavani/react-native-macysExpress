import { FETCH_CATEGORIES } from '../actions/types';

const INITIAL_STATE = { results: [] };

export default function(state = INITIAL_STATE.results, action) {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return action.payload;
    default:
      return state;
  }
}