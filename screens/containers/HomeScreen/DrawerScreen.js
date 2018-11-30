import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import PropTypes from 'prop-types';
import {StyleSheet,ScrollView, Text, View,Button,Image,TouchableOpacity} from 'react-native';
import { DrawerActions } from 'react-navigation';
import { Icon } from 'react-native-elements'
import Screen2 from './Screen2';
class DrawerScreen extends Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
    this.props.navigation.dispatch(DrawerActions.closeDrawer())
  }



  render () {
    return (
      <View>
        <ScrollView>
          <View>


          <View style={{
            height:150,
             backgroundColor: '#1976D2', flex: 1,justifyContent: 'center',alignItems: 'center'}}>
        <Image
         style={{marginTop:15,width: 90, height: 90,borderRadius:90/2}}
         source={{uri: 'http://cdn1.insideallsports.com/uploads/profile/1524224578_18_40.jpg'}}
       />
        <Text style={{
            color:'white',
            marginBottom:10,marginTop:5}}> Sirish Raval</Text>
         
      </View>

            <View style={styles.menuItem} >
            <Icon
            onPress={this.navigateToScreen('Screen2')}
               name='home'
                color='#000000' />
              <Text style={{
            marginLeft:10}}
              onPress={this.navigateToScreen('Screen2')}>
                 Home
              </Text>
            </View>

            <View style={styles.menuItem}>
            <Icon
          name='person'
           color='#000000' />
              <Text style={{
            marginLeft:10}}
               onPress={this.navigateToScreen('About')}>
                About
              </Text>
            </View>


            <View style={styles.menuItem}>
            <Icon
          name='forum'
           color='#000000' />
              <Text  style={{
            marginLeft:10}}
               onPress={this.navigateToScreen('Contact')}>
               Contact
              </Text>
            </View>

          </View>


        </ScrollView>
      </View>
    );
  }
}
DrawerScreen.propTypes = {
  navigation: PropTypes.object
};
export default DrawerScreen;



const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#342',
  },
  heading: {
      fontSize: 20,
      textAlign: 'center',
      marginTop: 20,
  },
  menuItem:{
    flexDirection:'row',
      padding: 10,
      alignItems: 'center',
      borderWidth: 0.5,
      borderColor: '#fff'
  }
});
