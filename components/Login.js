import React, { Component } from "react"
import { StyleSheet, View, Text } from "react-native"
import { TextInput, Button, Alert, Image, TouchableHighlight } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import '../firebase'
import * as firebase from 'firebase'
import db from '../firebase'
import * as Google from 'expo-google-app-auth'
export default class Login extends Component{

    state = {
         email: '',
         password: '',
         errorMessage: null,
         firstName: '',
         lastName: '',
         signingUp: false
    }


    signInWithGoogleAsync = async () =>{
    try {
        console.log(Google)
        const result = await Google.logInAsync({
            behavior: 'web',
            iosClientId: '122621961076-bbv3j631vggpue3nilbsdms0ifj3cioq.apps.googleusercontent.com',
            scopes: ['profile', 'email'],
        });
        console.log(result)

        if (result.type === 'success') {
            return result.accessToken;
        } else {
            return { cancelled: true };
        }
    } catch (error) {
        this.setState({ errorMessage: error.message })
    }
}

    handleLogin = () => {
        const {email, password} = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password).then(user => {
            const users = db.collection("users").doc(user.user.uid);
            
            let getUser = users.get()
            .then(doc => {
                if (!doc.exists) {
                    console.log('Typo? Or You fucked something up')
                } else {
                    console.log('HAH, GOTEEEEEEM', doc.data())
                }
            })
            .catch(err => {
                console.log('Error', err)
            });
            
            
            console.log(getUser)

        }).catch(error => this.setState({errorMessage: error.message}))

    }

    handleSignUp = () => {
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then(user => {
            const collection = db.collection('users')
            
            collection.doc(user.user.uid).set({
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email
            })
        }
        ).catch(error => this.setState({errorMessage: error.message}))
    }
    toggleSignUp = () => {
        this.setState({signingUp: !this.state.signingUp})
    }

    render() {
        return (

            <View style={styles.superContainer}>
                {!this.state.signingUp ?
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
                                    onPress={this.signInWithGoogleAsync}
                                >
                                <Image
                                    style={{ width: 43, height: 43, marginRight: 15 }}
                                    source={require("../assets/googlebutton.png")}
                                />
                                </TouchableHighlight>
                            </View>
                        </View>
                    </View>
                </View>
                :
                <KeyboardAwareScrollView
                    style={{ backgroundColor: '#4c69a5' }}
                    resetScrollToCoords={{ x: 0, y: 0 }}
                    contentContainerStyle={styles.container}
                    scrollEnabled={true}
                    enableOnAndroid={true}
                >
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
                            <View>
                                <Button
                                    title="Submit"
                                    onPress={this.handleSignUp}
                                />
                            </View>
                            <View style={styles.haveAccount}>
                                <Text>
                                    Already have an account?   
                                </Text>
                                <Button
                                    title="Log In"
                                    onPress={this.toggleSignUp}
                                />
                            </View>
                        </View>
                    </View>
                </KeyboardAwareScrollView>
                }
            </View>
        )
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
    superContainer: {
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
    },
    haveAccount: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: 'center',
        marginTop: 20
    }
})
