import React from "react";
import MapView, { Marker } from "react-native-maps";

const CustomMapView = props => {
  return (
    <MapView
      provider="google"
      mapType="mutedStandard"
      showsUserLocation
      showsMyLocationButton
      style={{ flex: 1 }}
      region={props.region}
      showsUserLocation={true}
      onRegionChange={reg => props.onRegionChange(reg)}
    >
      <Marker coordinate={props.region} />
    </MapView>
  );
};
export default CustomMapView;
