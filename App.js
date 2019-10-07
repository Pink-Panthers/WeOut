import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Map from './components/Map'
import Login from './components/Login'
import Home from './components/Home'
import SettingsScreen from './components/SettingsScreen';
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createAppContainer } from 'react-navigation'

const drawer = createDrawerNavigator({
  Home,
  Login,
  Map,
  SettingsScreen
})

const Drawer = createAppContainer(drawer)

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Login /> */}
      {/* <Home /> */}
      <Drawer />
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
