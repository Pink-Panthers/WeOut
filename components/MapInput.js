import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

class MapInput extends React.Component {
  render() {
    return (
      <GooglePlacesAutocomplete
        placeholder="Search"
        minLength={2}
        autoFocus={true}
        returnKeytype={"search"}
        listViewDisplayed={false}
        fetchDetails={true}
        onPress={(data, details = null) => {
          this.props.notifyChange(details.geometry.location);
        }}
        query={{
          key: "AIzaSyDtL-Gqej9DslO6FZU49rSS8PFOwNUmFM4",
          language: "en"
        }}
        nearbyPlacesAPI="GooglePlacesSearch"
        debounce={300}
      />
    );
  }
}

export default MapInput;
