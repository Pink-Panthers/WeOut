import React, { Component } from "react";
import { View, Dimensions, StyleSheet } from "react-native";
import { getLocation } from "../services/getLocation";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Map from "./Map";
import Menu from "./Menu";

const { width, height } = Dimensions.get("screen");

export default class MapContainer extends Component {
  constructor (props) {
    super (props)
    this.state = {
      region: {},
      selected: {},
      details: {}
   }
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
    const circleData = this.props.navigation.getParam('circleData')
    return (
      <View style={{ flex: 1 }}>
        <Menu navigation={this.props.navigation} />
        <View style={styles.input}>
          <GooglePlacesAutocomplete
            title={true}
            placeholder="Search"
            minLength={2}
            autoFocus={true}
            listViewDisplayed={false}
            fetchDetails={true}
            onPress={(data, details) => {
              this.notifyChange(details.geometry.location);
              this.setState({ selected: data, details });
              // console.log(details.geometry.location)
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
          <View style={styles.map}>
            <Map
              region={this.state.region}
              onRegionChange={reg => this.onMapRegionChange(reg)}
              selected={this.state.selected}
              details={this.state.details}
              navigation={this.props.navigation}
              circleData={circleData}
            />
          </View>
        ) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    width: width * 0.68,
    height: height * 0.16,
    paddingTop: 10,
    marginTop: 30,
    alignSelf: "center"
  },
  map: {
    flex: 1,
    borderTopColor: "black",
    borderTopWidth: 1
  }
});
