import React from "react";
import { View, Dimensions } from "react-native";
import Map from "../components/Map";
import { getLocation } from "../services/getLocation";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

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
  notifyChange(loc) {
    this.getCoordsFromName(loc);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            width,
            paddingTop: 10,
            alignSelf: "center",
            // alignItems: "center",
            height: height * 0.1,
            backgroundColor: "white",
            justifyContent: "flex-end"
          }}
        >
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
              console.log("DATA FROM GOOGLE PLACES", data);
              this.notifyChange(details.geometry.location);
              this.setState({ selected: data });
            }}
            query={{
              key: "AIzaSyDtL-Gqej9DslO6FZU49rSS8PFOwNUmFM4",
              language: "en"
            }}
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={200} //in MS, essentially throttles the API load https://blog.bitsrc.io/understanding-throttling-and-debouncing-973131c1ba07
            style={{ flex: 1, zIndex: 2 }}
          />
        </View>

        {this.state.region["latitude"] ? (
          <View style={{ flex: 1, zIndex: 0 }}>
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
