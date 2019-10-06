import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Map from './components/Map'
import Login from './components/Login'
import Home from './components/Home'
import Links from './components/Links'
import SettingsScreen from './components/SettingsScreen';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Login /> */}
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
})
