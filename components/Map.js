import React from "react";
import MapView, { Marker, Callout } from "react-native-maps";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  Linking,
  Image,
  Alert
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

dialCall = number => {
  let phoneNumber = "";
  if (Platform.OS === "android") {
    phoneNumber = `tel:${number}`;
  } else {
    phoneNumber = `telprompt:${number}`;
  }
  Linking.openURL(phoneNumber);
};

// const customAlert = props => {
//   console.log("PROPS HERE", props);
//   Alert.alert(
//     "What you wanna do?",
//     "PLACEHOLDER",
//     [
//       {
//         text: "Schedule an event here",
//         onPress: () => console.log("Schedule Event Component")
//       },
//       {
//         text: "Cancel",
//         onPress: () => console.log("Cancel Pressed"),
//         style: "cancel"
//       },
//       {
//         text: "Call",
//         onPress: props => dialCall(props.details.formatted_phone_number)
//       }
//     ],
//     { cancelable: false }
//   );
// };

const Map = props => {
  const circleData = props.circleData;
  const details = {
    name: props.details.name,
    address: props.details.formatted_address
  };
  console.log("CIRCLE DATA", circleData);
  return (
    <MapView
      provider="google"
      mapType="mutedStandard"
      showsUserLocation
      showsMyLocationButton
      style={{ flex: 1 }}
      region={props.region}
    >
      <Marker
        coordinate={props.region}
        image={require("../assets/addEventIcon128.png")}
      >
        {props.selected.description ? (
          <Callout
            style={styles.callout}
            onPress={() => {
              // console.log("PROPS HERE", props.details);
              Alert.alert(
                "What you wanna do?",
                "PLACEHOLDER",
                [
                  {
                    text: "Schedule Event",
                    onPress: () =>
                      props.navigation.navigate("CreateEvent", {
                        circleData,
                        details
                      })
                  },
                  {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                  },
                  {
                    text: "Call",
                    onPress: () =>
                      dialCall(props.details.formatted_phone_number)
                  }
                ],
                { cancelable: false }
              );
            }}
          >
            <View style={styles.callout}>
              <Text style={{ padding: 2 }}>
                {props.details.name}
                {"\n"}
                {props.details.formatted_address}
                {"\n"}
                {props.details.formatted_phone_number}
                {"\nOpening Hours:"}
                {"\n"}
                {props.details.opening_hours.weekday_text.join("\n")}
              </Text>
              <MaterialIcons
                name="add-circle"
                size={22}
                style={{ padding: 2 }}
              />
            </View>
          </Callout>
        ) : null}
      </Marker>
    </MapView>
  );
};

const styles = StyleSheet.create({
  callout: {
    alignItems: "center"
  }
});

export default Map;
