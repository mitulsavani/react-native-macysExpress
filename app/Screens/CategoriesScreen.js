import React from 'react';
import { Text, View, ScrollView, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import { Font } from 'expo';

import * as actions from '../actions';
class CategoriesScreen extends React.Component {
  static navigationOptions = {
    header: null
  }
  state = {
    fontLoaded: false
  };

  async componentDidMount() {
    await Font.loadAsync({
      'productSans': require('../../assets/fonts/ProductSans-Regular.ttf'),
    });
    
    this.setState({ fontLoaded: true });
    console.log(this.state.fontLoaded);
  }
  
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        {
          this.state.fontLoaded ? (
            <Text style={styles.header}>Shop by Category</Text>
          ) : null
        }
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
      </ScrollView>
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
    fontFamily: 'productSans',
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
