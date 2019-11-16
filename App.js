
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';

export default class FlexDimensionsApp extends Component{
  render(){
    return(
      <View style={{height: 400}}>
        <View style={{flex:1, backgroundColor: 'powderblue'}}></View>
        <View style={{flex:2, backgroundColor: 'skyblue'}}></View>
        <View style={{flex:3, backgroundColor: 'steelblue'}}></View>
      </View>
    );
  }
}