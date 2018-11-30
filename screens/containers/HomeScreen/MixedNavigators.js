import React from 'react';
import { TabNavigator, StackNavigator, DrawerNavigator ,DrawerItems} from 'react-navigation';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import TabA from './TabA';
import TabB from './TabB';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import DrawerScreen from './DrawerScreen';
import DrawerNav from './DrawerNav';


const TabNav = TabNavigator({
  Home: {
    screen: Screen1
    // navigationOptions: () => ({
    //   tabBarIcon: ({ tintColor }) => {
    //     // return (
    //     //   <IconIonicons 
    //     //     name='rocket'
    //     //     size={26}
    //     //     color={tintColor}
    //     //   />
    //     // );
    //   }
    // })
  },
  Favorite: {
    screen: Screen2
    // navigationOptions: () => ({
    //   tabBarIcon: ({ tintColor }) => {
    //     // return (
    //     //   <IconIonicons 
    //     //     name='rocket'
    //     //     size={26}
    //     //     color={tintColor}
    //     //   />
    //     // );
    //   }
    // })
  },
  List: {
    screen: Screen1
    // navigationOptions: () => ({
    //   tabBarIcon: ({ tintColor }) => {
    //     return (
    //       <IconIonicons 
    //         name='rocket'
    //         size={26}
    //         color={tintColor}
    //       />
    //     );
    //   }
    // })
  }
}, {
  tabBarPosition:'bottom',
  swipeEnabled: true,
  tabBarOptions: {
    showIcon: false,
    activeBackgroundColor: "#a9c3d2",
    //tab text icon inactive color
    inactiveTintColor: 'white',
    activeTintColor: '#e0ab18'
  }
}); 

const StackTab = StackNavigator({
  
  Tabs: TabNav

});

export default Drawer = DrawerNavigator({

  Tabs: {
    screen: StackTab
  }
}
,

{
  drawerPosition: 'left',
  contentOptions: {
    activeTintColor: '#000000',
 },
  backgroundColor:'#565465',
  contentComponent: DrawerScreen,
  drawerOpenRoute: "DrawerOpen",
  drawerCloseRoute: "DrawerClose",
  drawerToggleRoute: "DrawerToggle",
  drawerBackgroundColor: 'white',
}

);



const CustomDrawerContentComponent =(props)=>(
  <View>
  <View
    style={{
      backgroundColor: '#000000',
      height: 140,
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
     <Image
        source={{uri: 'http://cdn1.insideallsports.com/uploads/profile/thumb_173x173/1524224578_18_40.jpg?v=1541071136'}}
     />

  </View>
  <DrawerItems {...props} />
</View>


)