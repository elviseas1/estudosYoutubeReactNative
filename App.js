
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';

export default class FlexboxApp extends Component{
  render(){
    return(
      <View style={{flex: 1, flexDirection: "column", justifyContent: "center", alignItems: 'stretch',}}>
        <View style={{width:80, height: 80, backgroundColor: 'powderblue'}}></View>
        <View style={{height: 80, backgroundColor: 'skyblue'}}></View>
        <View style={{height: 180, backgroundColor: 'steelblue'}}></View>
      </View>
    );
  }
}