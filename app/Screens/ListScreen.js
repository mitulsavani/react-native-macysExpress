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
    console.log(this.props.savedStations);
  }
  render() {
    return (
      <ScrollView contentContainerStyle={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Card
          title='HELLO WORLD'
          image={require('../images/mens/shoes.png')}>
          <Text style={{ marginBottom: 10 }}>
            The idea with React Native Elements is more about component structure than actual design.
  </Text>
          <Button
            onPress={() => this.props.navigation.navigate('ProductList')}
            backgroundColor='#03A9F4'
            buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
            title='VIEW NOW' />
        </Card>
        <Card
          title='HELLO WORLD'
          image={require('../images/mens/shoes.png')}>
          <Text style={{ marginBottom: 10 }}>
            The idea with React Native Elements is more about component structure than actual design.
  </Text>
          <Button
            backgroundColor='#03A9F4'
            buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
            title='VIEW NOW' />
        </Card>
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
