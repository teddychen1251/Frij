import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './src/HomeScreen'
import RegisterScreen from './src/RegisterScreen';
import LoginScreen from './src/LoginScreen';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Register: {screen: RegisterScreen},
  Login: {screen: LoginScreen}
});

const FrijApp = createAppContainer(MainNavigator);

export default FrijApp;