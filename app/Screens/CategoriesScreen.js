import React from 'react';
import { Text, View, Button } from 'react-native';
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
