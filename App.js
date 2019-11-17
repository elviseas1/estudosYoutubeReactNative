
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Button,
  Alert,
  ScrollView,
  FlatList
} from 'react-native';

export default class FlatListApp extends Component{

  render(){
    return(
      <View style={styles.container}>
        <FlatList
          data={[
            {key: 'Homem de Ferro'},
            {key: 'Hulk'},
            {key: 'Thor'},
            {key: 'Capitão America'},
            {key: 'Homem Aranha'},
            {key: 'Viuva Negra'},
            {key: 'Gavião Arqueiro'},
            {key: 'Homem Formiga'},
            {key: 'Homem de Ferro'},
            {key: 'Hulk'},
            {key: 'Thor'},
            {key: 'Capitão America'},
            {key: 'Homem Aranha'},
            {key: 'Viuva Negra'},
            {key: 'Gavião Arqueiro'},
            {key: 'Homem Formiga'},
            {key: 'Homem de Ferro'},
            {key: 'Hulk'},
            {key: 'Thor'},
            {key: 'Capitão America'},
            {key: 'Homem Aranha'},
            {key: 'Viuva Negra'},
            {key: 'Gavião Arqueiro'},
            {key: 'Homem Formiga'},

            
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />

      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40
  },
  item:{
    padding: 10,
    fontSize: 30,
    height: 60
  }
})