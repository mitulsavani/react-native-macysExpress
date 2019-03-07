import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import HomeScreen from '../Screens/HomeScreen';
import ProductListStack from './ProductListStack';

const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeScreen,
    ProductListSt: ProductListStack
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = 'ios-home';
        } else if (routeName === 'ProductListSt') {
          iconName = 'ios-list';
        } 
        return (
          <Icon
            name={iconName}
            type="ionicon"
            color={focused ? '#FF0844' : 'gray'}
          />
        );
      },
    }),
    tabBarOptions: {
      activeTintColor: '#FF0844',
      inactiveTintColor: 'gray',
      showLabel: false,
      tabStyle: {
        padding: 0, margin: 0,
      },
      style: {
        backgroundColor: 'white',
      },
    },
    navigationOptions: {
      header: null
    }
  }
);

export default TabNavigator;
