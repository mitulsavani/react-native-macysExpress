import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from "../Screens/HomeScreen";
import CategoriesScreen from "../Screens/CategoriesScreen";
import ListScreen from "../Screens/ListScreen";

const TabNavigator = createBottomTabNavigator({
  Categories: CategoriesScreen,
  Home: HomeScreen,
  List: ListScreen
},
{
  initialRouteName: 'Home',
});



export default createAppContainer(TabNavigator);