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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
