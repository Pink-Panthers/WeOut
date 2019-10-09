import React from "react";
import { View, Dimensions, StyleSheet } from "react-native";
import { getLocation } from "../services/getLocation";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Map from "../components/Map";

const { width, height } = Dimensions.get("screen");

export default class MapContainer extends React.Component {
  state = {
    region: {},
    selected: {}
  };

  componentDidMount() {
    this.getInitialState();
  }

  getInitialState() {
    getLocation().then(data => {
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

  getCoordsFromName(location) {
    this.setState({
      region: {
        latitude: location.lat,
        longitude: location.lng,
        latitudeDelta: 0.003,
        longitudeDelta: 0.003
      }
    });
  }

  onMapRegionChange(region) {
    this.setState({ region });
  }

  notifyChange(location) {
    this.getCoordsFromName(location);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.input}>
          <GooglePlacesAutocomplete
            // ref={ref => {
            //   this.placesRef = ref;
            // }}
            title={true}
            placeholder="Search"
            minLength={2}
            autoFocus={true}
            // returnKeytype={"search"}
            listViewDisplayed={false}
            fetchDetails={true}
            // renderDescription={row => row.description}
            onPress={(data, details = null) => {
              this.notifyChange(details.geometry.location);
              this.setState({ selected: data });
            }}
            query={{
              key: "AIzaSyDtL-Gqej9DslO6FZU49rSS8PFOwNUmFM4",
              language: "en"
            }}
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={200} //in MS, essentially throttles the API load https://blog.bitsrc.io/understanding-throttling-and-debouncing-973131c1ba07
          />
        </View>

        {this.state.region["latitude"] ? (
          <View style={{ flex: 1}}>
            <Map
              region={this.state.region}
              onRegionChange={reg => this.onMapRegionChange(reg)}
              selected={this.state.selected}
            />
          </View>
        ) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    width: width*0.8,
    height: height * 0.12,
    paddingTop: 10,
    marginTop: 30,
    alignSelf: "center"
  }
})