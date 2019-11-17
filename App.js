
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Button,
  Alert,
} from 'react-native';

export default class ButtonApp extends Component{
  onPressButton(){
    Alert.alert('Você clicou no botão!')
  }

  render(){
    return(
      <View style={styles.container}>
        <View style={styles.butonContainer}>
          <Button 
            onPress= {this.onPressButton}
            title= 'Clique aqui!'
          />
        </View>
        <View style={styles.butonContainer}>
          <Button 
            onPress= {this.onPressButton}
            title= 'Clique aqui!'
            color= '#841584'
          />
        </View> 
        <View style={styles.alternativeButtonContainer}>
          <Button 
          onPress= {this.onPressButton}
          title= 'Parece ok!'
          />
        </View>  
        <View style={styles.alternativeButtonContainer}>
          <Button 
          onPress= {this.onPressButton}
          title= 'ok!'
          color= '#841584'
          />
        </View> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
     flex: 1,
    justifyContent: 'center',
  },
  butonContainer: {
    margin: 20,
  },
  alternativeButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})