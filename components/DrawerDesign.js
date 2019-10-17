import React, { Component } from "react"
import { View, Text, StyleSheet, Image } from "react-native"
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler"
import { updateMountedCircle, setNewCircleData } from './Circle'
import firebase from 'firebase'
import db from "../firebase"

export let updateDrawerIfCircleMounted = function(bool) {
  this.setState({ circleMounted: bool })
}

export default class DrawerDesign extends Component {
  constructor() {
    super()
    this.state = {
      userCircles: [],
      circleMounted: false
    }
    updateDrawerIfCircleMounted = updateDrawerIfCircleMounted.bind(this)
  }

  componentDidMount() {
    db.collection('circles')
    .where('memberIDs', 'array-contains', `${firebase.auth().currentUser.uid}`)
    .onSnapshot( circles => {
      var allCircs = []
      circles.forEach( circle => {
        let uid = circle.data().uid
        allCircs.push(circle.data())
        db.collection('events')
        .where('circle', '==', `${uid}`)
        .get()
        .then( events => {
          events.forEach( event => {
            db.collections('events').doc(event._document.key.path.segments[6]).update({
              members: firebase.firestore.FieldValue.arrayUnion(firebase.auth().currentUser.uid)
            })
          })
        })
      })
      if(this.state.circleMounted) {
        updateMountedCircle(allCircs)
      }
      this.setState({ userCircles: allCircs })
    })
  }



  navLink(nav, text, circle) {
    return (
      <TouchableOpacity
        onPress={() => {
          if(this.state.circleMounted) {
            setNewCircleData(circle)
          }
          if( text !== 'Create Circle' ) {
            this.setState({ circleMounted: true })
          }
          this.props.navigation.navigate(nav, {circle})
        }}
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
        <TouchableOpacity onPress={() => {
          this.setState({ circleMounted: false })
          this.props.navigation.navigate('Home')
        }}>
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
            {userCircles ? userCircles.map(circle =>
              this.navLink("Circle", circle.name, circle)
            ) : null}
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
    backgroundColor: "rgba(6, 80, 121, 0.48)",
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
