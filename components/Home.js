import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button, Image } from 'react-native'
import Menu from './Menu'
import * as firebase from "firebase";

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      displayName: ""
    };
  }

  componentDidMount() {
    const { email, displayName } = firebase.auth().currentUser;

    this.setState({ email, displayName });
  }

  signOutUser = () => {
    firebase.auth().signOut();
  };

  render() {
    // const img = firebase.auth().currentUser.providerData[0].photoURL
    return (
      
      <View style={styles.container}>
        <Menu navigation={this.props.navigation} />
        {/* <View>
            <Image
            style={{ width: 200, height: 200, borderRadius: 50, marginBottom: 50 }}
            source={{ uri: img.slice(0, img.length - 6) }}
            />
            </View> */}
        <Text>Hi {this.state.email}!</Text>
        <TouchableOpacity style={{ marginTop: 32 }} onPress={this.signOutUser}>
          <Text>Logout</Text>
        </TouchableOpacity>

      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});