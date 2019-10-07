import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  Dimensions,
  Image
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Permissions from "expo-permissions";
import MapInput from "./MapInput";

export default class Map extends React.Component {
  async componentDidMount() {
    const { status } = await Permissions.getAsync(Permissions.LOCATION);
    if (status !== "granted") {
      const response = await Permissions.askAsync(Permissions.LOCATION);
    }
  }

  render() {
    return (
      <MapView
        provider="google"
        mapType="mutedStandard"
        showsUserLocation
        showsMyLocationButton
        initialRegion={newYork}
        style={{ flex: 1 }}
      ></MapView>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    flex: 8,
    width: "100%",
    borderColor: "black",
    borderWidth: 0.6
  }
});

const newYork = {
  latitude: 40.7473735256486,
  longitude: -73.98564376909184,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421
};
