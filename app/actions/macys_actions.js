import axios from 'axios';
import { SAVE_STATION, CLEAR_SAVED_STATIONS, REMOVE_STATION, FETCH_CATEGORIES } from './types';

const CATEGORIES_URL = 'http://api.macys.com/v4/catalog/category';

export const fetchStations = callback => async dispatch => {
  try {
    let { data } = await axios({
      method: 'GET',
      url: CATEGORIES_URL,
      headers: {
        accept: 'application/json',
        'x-macys-webservice-client-id': 'h4ckathon'
      }
    });
    dispatch({ type: FETCH_CATEGORIES, payload: data });
    callback();
  } catch (error) {
    console.log(error);
  }
};

export const saveStation = station => {
  return {
    payload: station,
    type: SAVE_STATION
  };
};

export const clearSavedStations = () => {
  return { type: CLEAR_SAVED_STATIONS };
};

export const removeSavedStation = station => {
  return {
    payload: station,
    type: REMOVE_STATION
  };
};
