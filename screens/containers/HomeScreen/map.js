import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView,
    ActivityIndicator,
    Button
} from 'react-native';
import { GoogleAutoComplete } from 'react-native-google-autocomplete';

import LocationItem from './LocationItem';


export default class MapVieww extends Component {
  
  
    render() {
      return (

        <View style={styles.container}>
        <GoogleAutoComplete apiKey={'AIzaSyA_FBkdAqre4jrnU1AeJNPQwJsqvbBPPKQ'} debounce={500} minLength={3}>
          {({
            handleTextChange,
            locationResults,
            fetchDetails,
            isSearching,
            inputValue,
            clearSearchs, 
          
          }) => (
            <React.Fragment>
              <View style={styles.inputWrapper}>
                <TextInput
                  style={styles.textInput}
                  placeholder="Search a places"
                  
                   
                  onChangeText={handleTextChange}
                  value={inputValue}
                />
                <Button title="Clear" onPress={clearSearchs} />
              </View>
              {isSearching && <ActivityIndicator size="large" color="red" />}
              <ScrollView>
                {locationResults.map(el => (
                  <LocationItem
                    {...el}
                    key={el.id}
                 
                    fetchDetails={fetchDetails.geometry}
                   
                  />
                ))}
              </ScrollView>
            </React.Fragment>
          )}
        </GoogleAutoComplete>
      </View>
//         <View style={styles.container}>
// <GooglePlacesAutocomplete query={{ key:'AIzaSyA_FBkdAqre4jrnU1AeJNPQwJsqvbBPPKQ'}} debounce={500} 
// minLength={3}>
// {
// ({handleTextChange,locationResults})=>(
//     <React.Fragment>
//      {console.warn('locationResults',locationResults)}
// <View marginTop='80'>
// <TextInput
// style={styles.textInput}
// onChangeText={handleTextChange}
//  placeholder="Search places"/>

// </View>
// {/* <ScrollView>
//     {locationResults.map(el=>(
//         <LocationItem 
//          {...el}
      
//          key={el.id}
         
//         //  onPress={(data, details = null) => {
//         //     console.warn(details)
//         // // 'details' is provided when fetchDetails = true
//         // // console.log(data);
//         // // console.log(details);
//         //  }} 
         
//          />

         
//     ))}
// </ScrollView> */}


// </React.Fragment>)

// }


// </GooglePlacesAutocomplete>
//         </View>
      );
    }
  
  }
  
  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textInput: {
      height: 40,
      width: 300,
      borderWidth: 1,
      paddingHorizontal: 16,
    },
    inputWrapper: {
      marginTop: 80,
      flexDirection: 'row'
    },
  });