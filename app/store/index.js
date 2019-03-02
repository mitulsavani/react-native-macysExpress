import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistCombineReducers } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import reducers from '../reducers';
const config = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['savedStations']
};
const reducer = persistCombineReducers(config, reducers);
export default function configurationStore(initialSate = {}) {
  const store = createStore(reducer, initialSate, applyMiddleware(thunk));
  const persistor = persistStore(store);
  return { persistor, store };
}
