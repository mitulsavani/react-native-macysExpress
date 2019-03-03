import React from 'react';
import { Text, View, ScrollView, Button } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { connect } from 'react-redux';

import * as actions from '../actions';

class CategoriesScreen extends React.Component {
  componentDidMount() {
    this.loadStations();
  }
  loadStations = () => {
    this.props.fetchStations(22050, () => {});
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Categories!</Text>
        <Button
        title="Products Screen"
          onPress={() => this.props.navigation.navigate('Products')}
        />
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
