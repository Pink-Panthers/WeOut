import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import Menu from "./Menu";
import * as firebase from "firebase";
import db from "../firebase";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      displayName: "",
      event: {}
    };
  }

  componentDidMount() {
    db.collection("events")
      .doc("eventID1")
      .get()
      .then(event => {
        this.setState({ event: event.data() });
      });

    const { email, displayName } = firebase.auth().currentUser;
    this.setState({ email, displayName });
  }

  signOutUser = () => {
    firebase.auth().signOut();
  };

  render() {
    const startTime = () => {
      if (this.state.event.startTime) {
        const timer = this.state.event.startTime.seconds;
        if (timer) {
          return new Date(timer * 1000);
        }
      }
    };
    console.log(startTime());
    return (
      <View style={styles.container}>
        <ImageBackground
          source={{
            uri:
              "https://www.toptal.com/designers/subtlepatterns/patterns/vertical_cloth.png"
          }}
          style={styles.bgImage}
        >
          <Menu navigation={this.props.navigation} />
          <View style={styles.auth}>
            <Text style={{ marginTop: 100, color: "white" }}>
              Hi {this.state.email}!
            </Text>
            <TouchableOpacity
              style={{ marginTop: 1 }}
              onPress={this.signOutUser}
            >
              <Text style={{ color: "white" }}>Logout</Text>
            </TouchableOpacity>
            <Text style={{ color: "white" }}>Below are your events.</Text>
          </View>

          <View style={styles.event}>
            <View style={styles.singleEvent}>
              <Text>{this.state.event.location}</Text>
              <Text>{this.state.event.address} on </Text>
              <Text>{this.state.event.description}</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    top: 0,
    left: 0,
    justifyContent: "center",
    alignItems: "center",
    width: 420
  },
  singleEvent: {
    justifyContent: "center",
    padding: 50,
    alignItems: "center",
    height: 120,
    backgroundColor: "#ffdbac",
    borderBottomColor: "black",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderRadius: 10
  },
  auth: {
    flex: 1,
    alignItems: "center",
    color: "white"
  },
  event: {
    flex: 4,
    alignItems: "center"

    // marginTop: 75,
  },
  container: {
    flex: 1,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    backgroundColor: "#ff7f50",
    justifyContent: "center",
    alignItems: "center"
  }
});

{
  /* <View>
            <Image
            style={{ width: 200, height: 200, borderRadius: 50, marginBottom: 50 }}
            source={{ uri: img.slice(0, img.length - 6) }}
            />
            </View> */
}
