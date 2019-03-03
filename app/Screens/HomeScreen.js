import React from 'react';
import { Text, View, Button } from 'react-native';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
        <Button
          title="Settings Screen"
          onPress={() => this.props.navigation.navigate('SettingsStack')}
        />
      </View>
    );
  }
}