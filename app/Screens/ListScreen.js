import React from 'react';
import { Text, View, Button, ScrollView } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { connect } from 'react-redux';

import * as actions from '../actions';

class ListScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  renderLikedThings() {
    console.log(this.props.savedStations);
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>List!</Text>
        <Button
          title="Product info"
          onPress={() => this.props.navigation.navigate('ProductList')}
        />
        <View>{this.renderLikedThings()}</View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return { savedStations: state.savedStations };
}

export default connect(
  mapStateToProps,
  actions
)(ListScreen);
