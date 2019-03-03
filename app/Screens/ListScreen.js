import React from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import { connect } from 'react-redux';

import * as actions from '../actions';

class ListScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  renderLikedThings() {
    return this.props.savedStations.map(data => {
      return (
      <Text>{data.summary.name}</Text>
      )
    })
  }
  
  render() {
    return (
      <ScrollView contentContainerStyle={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {this.renderLikedThings()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

})

function mapStateToProps(state) {
  return { savedStations: state.savedStations };
}

export default connect(
  mapStateToProps,
  actions
)(ListScreen);
