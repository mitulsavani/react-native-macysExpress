import React from 'react';
import { Text, View,Button } from 'react-native';

export default class ProductScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Products!</Text>
        <Button
          title="Home Screen"
          onPress={() => this.props.navigation.navigate('HomeStack')}
        />
      </View>
    );
  }
}