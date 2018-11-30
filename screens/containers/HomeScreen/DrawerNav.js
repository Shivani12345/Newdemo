import { DrawerNavigator, StackNavigator } from 'react-navigation';
import Screen1 from './Screen1';
import Screen2 from './Screen2';


const StackScreen1 = StackNavigator({
  Screen1: {
    screen: Screen1,
    navigationOptions: () => ({
      title: 'Here is screen 1 !',
      headerTintColor: 'black',
      headerStyle: {
        backgroundColor: 'red'
      }
    })
  }
});

const StackScreen2 = StackNavigator({
  Screen2: {
    screen: Screen2,
    navigationOptions: () => ({
      title: 'Here is screen 2 !',
      drawerLockMode: 'locked-closed'
    })
  }
});

export default Drawer = DrawerNavigator({
  Screen1: {
    screen: StackScreen1
  },
  Screen2: {
    screen: StackScreen2
  }
}, {
  drawerPosition: 'right'
  });