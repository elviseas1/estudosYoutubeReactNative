
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';

const styles = StyleSheet.create({
  bigblue:{
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 50, 
  },
  red: {
    color: 'red',
    fontSize: 30, 
  }
})

export default class StylesApp extends Component{
  render(){
    return(
      <View style={{padding: 50}}>
        <Text style={styles.red}>Vermelho</Text>
        <Text style={styles.bigblue}>Azul</Text>
        <Text style={[styles.bigblue, styles.red]}>Azul, depois Vermelho</Text>
        <Text style={[styles.red, styles.bigblue]}>Vermelho, depois Azul</Text>
      </View>
    );
  }
}