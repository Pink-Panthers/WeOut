import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Links() {
  return (
    <View style={styles.container}>
      <Text>LINKS SCREEN</Text>
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