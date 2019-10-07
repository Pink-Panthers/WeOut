import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Menu from './Menu'

export default function Home(props) {
  return (
    <View style={styles.container}>
        <Menu navigation={props.navigation}/>
        <Text style={styles.title}>Events</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    top: 40
  }
})