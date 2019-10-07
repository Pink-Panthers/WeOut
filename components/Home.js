import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Menu from './Menu'

export default function Home() {
  return (
    <View style={styles.container}>
        <Menu />
        <Text>HOME SCREEN</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
})