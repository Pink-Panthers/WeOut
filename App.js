import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Map from './components/Map'
import Login from './components/Login'
import Home from './components/Home'
import Circle from './components/Circle'
import DrawerDesign from './components/DrawerDesign'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createAppContainer } from 'react-navigation'

const drawerNavigation = createDrawerNavigator({
  Home,
  Login,
  Map,
  Circle
},
{
  drawerWidth: Dimensions.get('window').width*0.24,
  contentComponent: ({ navigation }) => <DrawerDesign navigation={navigation}/>
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
    backgroundColor: '#fff'
  },
})
