
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';

export default class FixedDimensionsApp extends Component{
  render(){
    return(
      <View style={{padding: 35}}>
        <View style={{width:100, height: 100, backgroundColor: 'powderblue'}}></View>
        <View style={{width:150, height: 150, backgroundColor: 'skyblue'}}></View>
        <View style={{width:300, height: 300, backgroundColor: 'steelblue'}}></View>
      </View>
    );
  }
}