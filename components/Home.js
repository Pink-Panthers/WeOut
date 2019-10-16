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
      events: [],
      imageUrl: ''
    }
  }

  componentDidMount() {
    let randomImages = [
      require("../assets/pics/1.jpg"),
      require("../assets/pics/2.jpg"),
      require("../assets/pics/3.jpg"),
      require("../assets/pics/4.jpg"),
      require('../assets/pics/5.jpg'),
      require('../assets/pics/6.jpg'),
      require('../assets/pics/7.jpg'),
      require('../assets/pics/8.jpg'),
      require('../assets/pics/9.jpg'),
      require('../assets/pics/10.jpg'),
      require('../assets/pics/11.jpg'),
      require('../assets/pics/12.jpg'),
    ]
    db.collection("events")
      .where("members", 'array-contains', `${firebase.auth().currentUser.uid}`)
      .onSnapshot( events => {
        var newEvents = []
        events.forEach( event => {
          newEvents.push(event.data())
        })
        const { email, displayName } = firebase.auth().currentUser
        this.setState({ email, displayName, events: newEvents })
      })
    this.state.imageUrl.length > 0 ? console.log('good'): this.setState({ imageUrl: randomImages[Math.floor(Math.random() * randomImages.length)]})
  }

  signOutUser = () => {
    firebase.auth().signOut();
  }

  render() {


    const { events } = this.state
    return (
      <View style={styles.container}>
        <ImageBackground source={this.state.imageUrl} style={styles.bgImage}>
          <Menu navigation={this.props.navigation} />

            <View style={styles.auth}>
              <Text style={{ color: "white" }}>
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
            {events
              ? events.map(event => {
                  return (
                    <View
                      key={Math.floor(Math.random() * 231425635342)}
                      style={styles.singleEvent}
                    >
                      <Text style={{ color: "white", textShadowColor: "red" }}>
                        {event.eventName + " " + event.description}
                      </Text>
                      <Text style={{ color: "white", textShadowColor: "red" }}>
                        {event.placeName + " " + event.address}
                      </Text>
                      <Text style={{ color: "white", textShadowColor: "red" }}>
                        Start Time:{" "}
                        {String(new Date(event.startTime.seconds * 1000)).slice(
                          0,
                          25
                        )}
                      </Text>
                      <Text style={{ color: "white", textShadowColor: "red" }}>
                        End Time:{" "}
                        {String(new Date(event.endTime.seconds * 1000)).slice(
                          0,
                          25
                        )}
                      </Text>
                    </View>
                  );
                })
              : null}
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
    color: "white",
    justifyContent: "center",
    padding: 50,
    alignItems: "center",
    height: 120,
    backgroundColor: "rgba(6, 80, 121, 0.48)",
    borderBottomColor: "rgba(255, 255, 255, 0.36)",
    borderTopColor: "rgba(255, 255, 255, 0.36)",
    borderLeftColor: "rgba(255, 255, 255, 0.36)",
    borderRightColor: "rgba(255, 255, 255, 0.36)",
    borderTopWidth: 3,
    borderBottomWidth: 3,
    borderLeftWidth: 3,
    borderRightWidth: 3,
    borderRadius: 10
  },
  auth: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 300,
    width: 300,
    color: "white",
    backgroundColor: "rgba(6, 80, 121, 0.48)",
    borderBottomColor: "rgba(255, 255, 255, 0.36)",
    borderTopColor: "rgba(255, 255, 255, 0.36)",
    borderLeftColor: "rgba(255, 255, 255, 0.36)",
    borderRightColor: "rgba(255, 255, 255, 0.36)",
    borderTopWidth: 3,
    borderBottomWidth: 3,
    borderLeftWidth: 3,
    borderRightWidth: 3,
    borderRadius: 10
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
    backgroundColor: "white",
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
