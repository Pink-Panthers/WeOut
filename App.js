import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Map from './components/Map'
import Login from './components/Login'

export default function App() {
  return (
    <View style={styles.container}>
      <Login />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
