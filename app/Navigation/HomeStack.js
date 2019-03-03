import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from '../Screens/HomeScreen';
import ProductListStack from './ProductListStack';

const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeScreen,
    ProductListSt: ProductListStack
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      header: null
    }
  }
);

export default TabNavigator;
