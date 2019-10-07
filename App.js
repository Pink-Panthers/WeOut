<<<<<<< HEAD
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MapContainer from "./containers/MapContainer";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      {/* <Header /> */}
      <MapContainer />
      {/* <Footer /> */}
=======
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
>>>>>>> db5a48c1ee53aa95e349aed6c1eb5f27c5894da2
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
<<<<<<< HEAD
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
=======
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
})
>>>>>>> db5a48c1ee53aa95e349aed6c1eb5f27c5894da2
