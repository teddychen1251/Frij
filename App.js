import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './src/HomeScreen'
import RegisterScreen from './src/RegisterScreen';
import LoginScreen from './src/LoginScreen';
import FrijScreen from './src/FrijScreen';
import NewFoodModal from './src/NewFoodModal';

const MainStack = createStackNavigator({
  Home: {screen: HomeScreen},
  Register: {screen: RegisterScreen},
  Login: {screen: LoginScreen},
  Frij: {screen: FrijScreen}
},
{
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#fffff'
    },
    headerTintColor: '#aaa',
    headerTitleStyle: {
        fontWeight: 'bold'
    }
  }
});
const RootStack = createStackNavigator({
  Main: {
    screen: MainStack
  },
  FoodModal: {
    screen: NewFoodModal
  },
  FrijScreen: {
    screen: FrijScreen
  }
},
{
  initialRouteName: 'Main',
  mode: 'modal',
  headerMode: 'none'
})

const FrijAppContainer = createAppContainer(RootStack);

export default class FrijApp extends React.Component {
  render() {
    return <FrijAppContainer />;
  }
}
