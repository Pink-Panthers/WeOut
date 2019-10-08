import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

// const setLocation = function(text) {
//   this.placesRef && this.placesRef.setAddressText(text);
// };
class MapInput extends React.Component {
  render() {
    return (
      <GooglePlacesAutocomplete
        // ref={ref => {
        //   this.placesRef = ref;
        // }}
        placeholder="Search"
        minLength={2}
        autoFocus={true}
        returnKeytype={"search"}
        listViewDisplayed={false}
        fetchDetails={true}
        // renderDescription={row => row.description}
        onPress={(data, details = null) => {
          this.props.notifyChange(details.geometry.location);
        }}
        query={{
          key: "AIzaSyDtL-Gqej9DslO6FZU49rSS8PFOwNUmFM4",
          language: "en"
        }}
        nearbyPlacesAPI="GooglePlacesSearch"
        debounce={200} //in MS, essentially throttles the API load https://blog.bitsrc.io/understanding-throttling-and-debouncing-973131c1ba07
        style={{ flex: 1 }}
      />
    );
  }
}

export default MapInput;
