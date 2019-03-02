import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RootNavigator from './Navigation/RootNavigator';

export default class App extends React.Component {
  render() {
    return (
      <RootNavigator/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
