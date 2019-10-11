import React from "react";
import MapView, { Marker, Callout } from "react-native-maps";
import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'

const Map = props => {
  return (
    <MapView
      provider="google"
      mapType="mutedStandard"
      showsUserLocation
      showsMyLocationButton
      style={{ flex: 1 }}
      region={props.region}
    >
      <Marker coordinate={props.region} image={require("../assets/weOut.png")}>
        {props.selected.description ? (
          <Callout>
            <View style={styles.callout}>
              <Text style={{padding:2}}>
                {props.selected.description}
              </Text>
              <MaterialIcons name="add-circle" size={22} style={{padding:2}}/>
            </View>
          </Callout>
        ) : null}
      </Marker>
    </MapView>
  );
};

const styles = StyleSheet.create({
  callout: {
    alignItems: 'center'
  }
})

export default Map;
