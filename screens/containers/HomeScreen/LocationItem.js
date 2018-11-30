import React, { PureComponent} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
Alert,TouchableOpacity
} from 'react-native';

export default class LocationItem extends PureComponent {
  
         _handlePress= async () => {

          const respo = await this.props.fetchDetails(this.props.place_id)
          //  Alert.alert(JSON.stringify(respo))
      
          // const respolong = await this.props.fetchDetails(this.props.geometry.location)
            {console.log(JSON.stringify(respo))
         

          //  {console.warn('respo',JSON.stringify(respo))}
            }}
    render() {
      return (
        <TouchableOpacity style={styles.root} onPress={this._handlePress}>
        <Text>{this.props.description}</Text>

       


      </TouchableOpacity>
      );
    }
  
  }
  

  const styles = StyleSheet.create({
    root: {
      height: 40,
      borderBottomWidth: StyleSheet.hairlineWidth,
      justifyContent: 'center'
    }
  })