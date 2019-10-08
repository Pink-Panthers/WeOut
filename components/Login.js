import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Keyboard} from 'react-native';
import { TextInput, Button, Alert, Image, TouchableHighlight } from 'react-native';
import '../firebase'
import * as firebase from 'firebase'
import db from '../firebase'

export default class Login extends Component{

    state = {
         email: '',
         password: '',
         errorMessage: null,
         firstName: '',
         lastName: '',
         signingUp: false
    }

    handleLogin = () => {
        const {email, password} = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password).then(user => {
            const users = db.collection("users").doc(user.user.uid);
            
            let getUser = users.get()
            .then(doc => {
                if (!doc.exists) {
                    console.log('Typo? Or You fucked something up');
                } else {
                    console.log('HAH, GOTEEEEEEM', doc.data());
                }
            })
            .catch(err => {
                console.log('Error', err);
            });
            
            
            console.log(getUser)

        }).catch(error => this.setState({errorMessage: error.message}));

    }

    handleSignUp = () => {
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then(user => {
            const collection = db.collection('users')
            // console.log(user)
            collection.doc(user.user.uid).set({
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email
            })
            console.log(currentUser)
        }
        ).catch(error => this.setState({errorMessage: error.message}))
    }
    toggleSignUp = () => {
        this.setState({signingUp: !this.state.signingUp})
    }

    render() {
        return (

            
            <View style={styles.container}>
            <View style={styles.innerContainer}>
              <Image
                style={{ width: 200, height: 200 }}
                source={require("../assets/weOut.png")}
              />
            </View>
                <View style={styles.errorMessage}>
                    {this.state.errorMessage ? <Text style={styles.error}>{this.state.errorMessage}</Text> : <Text>No error</Text>}
                </View>
            <View style={styles.innerContainer}>
              <View>
                <TextInput
                  autoCapitalize="none"
                  onChangeText={email => this.setState({ email })}
                  value={this.state.email}
                  style={styles.texts}
                  placeholder="Email"
                  maxLength={30}
                />
                <TextInput
                  autoCapitalize="none"
                  onChangeText={password => this.setState({ password })}
                  value={this.state.password}
                  style={styles.texts}
                  secureTextEntry={true}
                  placeholder="Password"
                />
              </View>
              {!this.state.signingUp ? 
              <View>
              <View style={styles.button}>
                  <Button
                    title="Login"
                    onPress={this.handleLogin}
                  />
                <Button
                  title="Sign Up"
                  onPress={this.toggleSignUp}
                />
              </View>
              <View style={styles.oath}>
                <TouchableHighlight
                  onPress={() => Alert.alert("Sign in with Google.")}
                >
                  <Image
                    style={{ width: 43, height: 43, marginRight: 15 }}
                    source={require("../assets/googlebutton.png")}
                  />
                </TouchableHighlight>
                <TouchableHighlight
                  onPress={() => Alert.alert("Sign in with Facebook.")}
                >
                  <Image
                    style={{ width: 40, height: 40, marginLeft: 15 }}
                    source={require("../assets/facebookbutton.png")}
                  />
                </TouchableHighlight>
                </View>
              </View>
              : 
                <View>

                  <TextInput
                       autoCapitalize="none"
                       onChangeText={firstName => this.setState({ firstName })}
                       value={this.state.firstName}
                       style={styles.texts}
                        placeholder="First Name"
                       maxLength={30}
                />
                <TextInput
                    autoCapitalize="none"
                    onChangeText={lastName => this.setState({ lastName })}
                    value={this.state.lastName}
                       style={styles.texts}
                    placeholder="Last Name"
                />
                        <View style={styles.button}>
                            <Button
                                title="Submit"
                                onPress={this.handleSignUp}
                            />

                        </View>
                        <View>
                            <Text>
                                Already have an account?
                            </Text>
                                <Button
                                    title="Log In"
                                    onPress={this.toggleSignUp}
                                />
                        </View>
                </View>
              }
            </View>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    errorMessage: {
        alignItems: "center",
        justifyContent: "center"
    },
    oath: {
        flexDirection: "row",
        marginBottom: 300
    },
    button: {
        flexDirection: "row"
    },
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    innerContainer: {
        backgroundColor: '#ff7f50',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    texts: {
        height: 50,
        fontSize: 25,
        borderColor: '#CCCCCC',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        width: 310,
        textAlign: "center"
    }
 
});

// const Login = connect()(DisconnectedLogin)

