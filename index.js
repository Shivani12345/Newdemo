/** @format */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);



import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {name as appName} from './app.json';
// import createSwitchNavigator from './drawapp'
// import AppDemo from "./nav/appmain";
// import MapVieww from './map';
import LoginAnimation from './screens/app'
import FinalCalc from './finalcalc'
import Appflex from './flex'
export default class screenss extends Component {
  render() {
    return (
      <View style={styles.container}>
<AppDemo/>
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

AppRegistry.registerComponent("Newdemo", () => Appflex);