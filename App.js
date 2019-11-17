
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
  FlatList,
  SectionList
} from 'react-native';

export default class SectionListApp extends Component{

  render(){
    return(
      <View style={styles.container}>
        <SectionList
          sections={[
            {title: 'Hérois', data: ['Homem de Ferro', 'Hulk','Thor', 'Capitão America', 'Homem Aranha', 'Viuva Negra', 'Gavião Arqueiro', 'Homem Formiga']},
            {title: 'Vilões', data: ['Loki', 'Ultron', 'Thanos', 'Venon', 'Duende Verde', 'Electro']},
            {title: 'Conjugues dos Hérois', data: ['Pepper', 'She-Hulk', 'Jane Foster', 'Peggy', 'Mary Jane Watson', '', 'Jeremy Renner', 'Vespa']}           
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor= {(item, index) => index}
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
  },
  sectionHeader:{
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 30,
    fontWeight: 'bold',
    backgroundColor: 'steelblue'
  },
})