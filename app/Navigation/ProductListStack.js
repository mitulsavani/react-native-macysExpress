import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import ProductListScreen from "../Screens/ProductListScreen";
import ListScreen from "../Screens/ListScreen";

const AppNavigator = createStackNavigator({
  List: {
    screen: ListScreen,
  },
  ProductList: {
    screen: ProductListScreen
  },
},
  {
    initialRouteName: 'List',
  });


export default createAppContainer(AppNavigator);
