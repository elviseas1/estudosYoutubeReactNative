
import React, {Component} from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';

class Ola extends Component {
  render(){
    return(
      <View style={{alignItems: 'center'}}>
        <Text>Olá {this.props.name}!!!</Text>
      </View>
    )
  }
}


export default class Saudacoes extends Component {
  render(){
    return (
      <View style={{alignItems: 'center', padding: 50}}>
           <Ola name='Elvis'/>
           <Ola name='Mirele'/>
           <Ola name='Miguel'/>
      </View>
    );
  }
}
