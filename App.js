
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput
} from 'react-native';

export default class PizzaTranslatorApp extends Component{
  constructor(props){
    super(props);
    this.state = {text: ''};
  };

  render(){
    return(
      <View style={{padding: 40}}>
        <TextInput 
          style={{height: 50, fontSize: 30}}
          placeholder= 'Digite aqui para traduzir!'
          onChangeText= {(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 50}}>
          {this.state.text.split(' ').map( (word) => (word) ? ':P' : ' ' )}
        </Text>
      </View> 
    );
  }
}