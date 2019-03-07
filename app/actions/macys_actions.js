import axios from 'axios';
import { SAVE_STATION, CLEAR_SAVED_STATIONS, REMOVE_STATION, FETCH_CATEGORIES } from './types';

export const fetchStations = (categoryId, callback) => async dispatch => {
  try {
    let { data } = await axios({
      method: 'GET',
      url: `http://api.macys.com/v3/catalog/category/${categoryId}/browseproducts?imagewidth=600&imagequality=180`,
      headers: {
        accept: 'application/json',
        'x-macys-webservice-client-id': 'h4ckathon'
      }
    });
    dispatch({ type: FETCH_CATEGORIES, payload: data.category[0].product.product });
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
