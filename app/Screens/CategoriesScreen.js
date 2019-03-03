import React from 'react';
import { Text, View, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';

import * as actions from '../actions';
class CategoriesScreen extends React.Component {
  static navigationOptions = {
    header: null
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Shop by Category</Text>
      <View style={styles.detailView}>
          <TouchableOpacity
            style={styles.thumbnailImageContainer}
            onPress={() => this.props.navigation.navigate('Products', { category: 0 })}>
            <Image
              style={styles.thumbnailImage}
              source={require('../images/womens.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.thumbnailImageContainer}
            onPress={() => this.props.navigation.navigate('Products', { category: 1 })}>
            <Image
              style={styles.thumbnailImage}
              source={require('../images/mens.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.thumbnailImageContainer}
            onPress={() => this.props.navigation.navigate('Products', { category: 2 })}>
            <Image
              style={styles.thumbnailImage}
              source={require('../images/kids.png')}
            />
          </TouchableOpacity>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 27,
    justifyContent:'center',
  }, 
  header: {
    fontSize:  35,
    fontWeight: "700",
    color: "#434343"
  },
  detailView: {
    marginTop: 30,
  },
  thumbnailImageContainer: {
    paddingVertical: 15,
  },
  thumbnailImage: {
    height: 195,
    width: '100%',
    borderRadius: 10,
  },

});

function mapStateToProps({ categories }) {
  return { categories: categories };
}
export default connect(
  mapStateToProps,
  actions
)(CategoriesScreen);
