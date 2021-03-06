import { StackNavigator } from 'react-navigation';
import Screen1 from './Screen1';
import Screen2 from './Screen2';

export default StackHome = StackNavigator({
  Screen1: {
    screen: Screen1,
    navigationOptions: () => ({
      title: 'Here is screen 1 !'
    })
  },
  Screen2: {
    screen: Screen2,
    navigationOptions: () => ({
      title: 'Screen 2'
    })
  }
},{
  initialRouteName: 'Screen2'
});