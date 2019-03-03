import React from 'react';
import { Text, View, Button } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

export default class ListScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>List!</Text>
        <Button
          title="Product info"
          onPress={() => this.props.navigation.navigate('ProductList')}
        />
      </View>
    );
  }
}
