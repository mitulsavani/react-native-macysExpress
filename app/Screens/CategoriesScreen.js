import React from 'react';
import { Text, View, ScrollView } from 'react-native';
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

  renderCategories() {
    console.log(this.props.categories.length);
    return this.props.categories[0].product.product.map((data, i) => {
      console.log(data.summary.name);
      <Text>{data}</Text>
    })
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Categories!</Text>
        <ScrollView>
        {this.props.categories.length > 0 ? this.renderCategories() : null}
        </ScrollView>
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
