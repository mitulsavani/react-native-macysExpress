import React from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { LinearGradient } from 'expo';

import * as actions from '../actions';

class ListScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  renderLikedThings() {
    return this.props.savedStations.map(data => {
      return (
        <Card key={data.id}
          image={{ uri: data.image[0].imageurl }}>
          <Text style={{ marginBottom: 10 }}>
            {data.summary.name}
          </Text>
          <Button
            backgroundColor='#03A9F4'
            buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
            title='VIEW' />
        </Card>
      )
    })
  }

  render() {
    return (
      <ScrollView>
        <View style={{ flex: 1 }}>
          <LinearGradient
            colors={['#84fab0', '#8fd3f4']}
            style={styles.header}>
            {
              <Text style={styles.headerText}>Liked</Text>
            }
          </LinearGradient>
          <View style={{ flex: 1, marginTop: -60 }}>
            {this.renderLikedThings()}
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    height: 200,
    backgroundColor: 'red',
    justifyContent: 'center',
    marginBottom: 20,
  },
  headerText: {
    marginTop: 40,
    marginHorizontal: 27,
    fontSize: 40,
    fontWeight: "700",
    color: "#fff"
  },

})

function mapStateToProps(state) {
  return { savedStations: state.savedStations };
}

export default connect(
  mapStateToProps,
  actions
)(ListScreen);
