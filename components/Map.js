import React from "react";
import MapView, { Marker, Callout } from "react-native-maps";
import { View, Text } from "react-native";

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
      <Marker coordinate={props.region}>
        {
          props.selected.description ? (
            <Callout>
              <View>
                <Text>
                  {props.selected.description}
                  {/* {props.selected.types[0]} */}
                </Text>
              </View>
            </Callout>
          ) : null
        }
      </Marker>
    </MapView>
  );
};

export default Map;
