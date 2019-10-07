import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Map from './components/Map'
import Login from './components/Login'
import Home from './components/Home'
import Circle from './components/Circle'
import SettingsScreen from './components/SettingsScreen';
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createAppContainer } from 'react-navigation'

const drawerNavigation = createDrawerNavigator({
  Home,
  Login,
  Map,
  Circle,
  SettingsScreen
},
{
  drawerWidth: Dimensions.get('window').width*0.30
})

const Drawer = createAppContainer(drawerNavigation)

export default function App() {
  return (
    <View style={styles.container}>
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
