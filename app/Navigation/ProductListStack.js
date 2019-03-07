import React from 'react';
import { createStackNavigator } from 'react-navigation';
import ProductListScreen from '../Screens/ProductListScreen';
import ListScreen from '../Screens/ListScreen';

const ProductListStack = createStackNavigator(
  {
    List: {
      screen: ListScreen
    },
    ProductList: {
      screen: ProductListScreen
    }
  },
  {
    initialRouteName: 'List'
  }
);

export default ProductListStack;

ProductListStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible
  };
};