import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Map from './components/Map'
import Header from './components/Header'
import Footer from './components/Footer'

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Map />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
