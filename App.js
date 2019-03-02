import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RootNavigator from './app/Navigation/RootNavigator';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configurationStore from './app/store';

export default class App extends React.Component {
  render() {
    const { persistor, store } = configurationStore();

    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <RootNavigator />
        </PersistGate>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
