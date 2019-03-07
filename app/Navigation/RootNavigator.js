import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeStack from "./HomeStack";
import SettingsStack from "./SettingsStack";
import ProductListStack from './ProductListStack';

const AppNavigator = createStackNavigator({
  HomeStack: HomeStack,
  SettingsStack: SettingsStack,
  ListStack:ProductListStack,
},
{
  initialRouteName: 'SettingsStack',
  headerMode: "none"
});

export default createAppContainer(AppNavigator);