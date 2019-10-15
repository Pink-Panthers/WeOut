import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import firebase from 'firebase'
import db from "../firebase";

export function updateDrawerState(){
  this.setState({userCircles: []})
  db.collection("users")
    .doc(firebase.auth().currentUser.uid)
    .get()
    .then(user => user.data().circles)
    .then(circles => {
      circles.forEach( circleID => {
      db.collection('circles')
      .doc(circleID)
      .get()
      .then( circle => {
        this.setState({userCircles: [...this.state.userCircles, circle.data()]})
      })
      })
    })
}

export default class DrawerDesign extends Component {
  constructor() {
    super();
    this.state = {
      userCircles: []
    }
    updateDrawerState = updateDrawerState.bind(this)
  }

  componentDidMount() {
    db.collection('users').doc(firebase.auth().currentUser.uid)
      .onSnapshot( user => {
        updateDrawerState()
      })
  }

  navLink(nav, text, circle) {
    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate(nav, {circle})}
        key={Math.random() * 999}
      >
        <View style={styles.circle}>
          <Image
            style={styles.icon}
            source={require("../assets/weOut.png")}
          />
          <Text style={styles.link}>
            {text}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }

  render() {
    const { userCircles } = this.state
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')} >
        <View style={styles.top}>
          <Image 
            style={styles.logo} 
            source={require("../assets/weOut.png")}
          />
        </View>
        </TouchableOpacity>
        <ScrollView style={styles.bottom}>
          <View>
            {this.navLink("CreateCircle", "Create Circle", userCircles)}
            {userCircles.map(circle =>
              this.navLink("Circle", circle.name, circle)
            )}
            {/* {this.navLink("CreateEvent", "Create Event")} */}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRightColor: "black",
    borderRightWidth: 1
  },
  top: {
    height: 140,
    backgroundColor: "#7f99b1",
    alignItems: "center",
    justifyContent: "flex-end",
    borderBottomColor: "black",
    borderBottomWidth: 1
  },
  bottom: {
    flex: 1,
    backgroundColor: "tan",
    paddingTop: 10
  },
  link: {
    flex: 1,
    fontSize: 16,
    textAlign: "center"
  },
  logo: {
    marginBottom: 6,
    width: 100,
    height: 100
  },
  circle: {
    height: 100,
    alignItems: "center",
    marginBottom: 12
  },
  icon: {
    width: 80,
    height: 80
  }
})
