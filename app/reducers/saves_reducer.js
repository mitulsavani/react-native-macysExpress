import _ from 'lodash';
import { PERSIST_REHYDRATE } from 'redux-persist/lib/constants';
import { SAVE_STATION, CLEAR_SAVED_STATIONS, REMOVE_STATION } from '../actions/types';
export default function(state = [], action) {
  switch (action.type) {
    case PERSIST_REHYDRATE:
      return action.payload.savedStations || [];
    case SAVE_STATION:
      return _.uniqBy([action.payload, ...state], 'id');
    case REMOVE_STATION:
      return state.filter(({ id }) => id !== action.payload);
    case CLEAR_SAVED_STATIONS:
      return [];
    default:
      return state;
  }
}
