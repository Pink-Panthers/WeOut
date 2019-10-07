import React from "react";
import { View, Dimensions } from "react-native";
import MapInput from "../components/MapInput";
import CustomMapView from "../components/CustomMapView";
import { getLocation } from "../services.js/getLocation";
const { width, height } = Dimensions.get("screen");

export default class MapContainer extends React.Component {
  state = {
    region: {}
  };

  componentDidMount() {
    this.getInitialState();
  }

  getInitialState() {
    getLocation().then(data => {
      console.log(data);
      this.setState({
        region: {
          latitude: data.latitude,
          longitude: data.longitude,
          latitudeDelta: 0.003,
          longitudeDelta: 0.003
        }
      });
    });
  }

  updateState(location) {
    this.setState({
      region: {
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.003,
        longitudeDelta: 0.003
      }
    });
  }

  getCoordsFromName(loc) {
    this.setState({
      region: {
        latitude: loc.lat,
        longitude: loc.lng,
        latitudeDelta: 0.003,
        longitudeDelta: 0.003
      }
    });
  }

  onMapRegionChange(region) {
    this.setState({ region });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            width,
            paddingTop: 10,
            alignSelf: "center",
            alignItems: "center",
            height: height * 0.1,
            backgroundColor: "white",
            justifyContent: "flex-end"
          }}
        >
          <MapInput notifyChange={loc => this.getCoordsFromName(loc)} />
        </View>

        {this.state.region["latitude"] ? (
          <View style={{ flex: 1 }}>
            <CustomMapView
              region={this.state.region}
              onRegionChange={reg => this.onMapRegionChange(reg)}
            />
          </View>
        ) : null}
      </View>
    );
  }
}
