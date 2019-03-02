import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { connect } from 'react-redux';

import * as actions from '../actions';

class CategoriesScreen extends React.Component {
  componentDidMount() {
    this.loadStations();
  }
  loadStations = () => {
    this.props.fetchStations(() => {});
  };
  render() {
    console.log(this.props.categories);
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Categories!</Text>
      </View>
    );
  }
}

function mapStateToProps({ categories }) {
  return { categories: categories };
}
export default connect(
  mapStateToProps,
  actions
)(CategoriesScreen);
