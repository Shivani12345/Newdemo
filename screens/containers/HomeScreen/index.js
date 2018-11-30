import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import PropTypes from 'prop-types'
// import MixedNavigators from './MixedNavigators';
import MapVieww from './map';

export default class HomeScreen extends Component {
  static propTypes = {
        logout: PropTypes.func
      }
    
      render () {
        return (
          <MapVieww/>
          // <View style={styles.container}>
          //    {/* <MixedNavigators /> */}
          //  </View>
        )
        }
  }
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    backgroundColor: '#1976D2',
    margin: 20
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  }
})