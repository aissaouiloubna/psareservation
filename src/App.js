import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Confirmation from './scene/Confirmation';
import Username from './scene/Username';
import Loading from './scene/Loading';
import Finale from './scene/Finale';
import test from './scene/test';

const App = createStackNavigator(
  {
    Loading: {screen: Loading, navigationOptions: {headerShown: false}},
    Username: {screen: Username, navigationOptions: {headerShown: false}},
    Finale: {screen: Finale, navigationOptions: {headerShown: false}},
    test: {screen: test, navigationOptions: {headerShown: false}},
    Confirmation: {
      screen: Confirmation,
      navigationOptions: {headerShown: false},
    },
  },
  {initialRouteName: 'Loading'},
);

export default createAppContainer(App);
