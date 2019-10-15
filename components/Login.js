// [import React, { Component } from "react"
// import { StyleSheet, View, Text } from "react-native"
// import { TextInput, Button, Alert, Image, TouchableHighlight } from 'react-native'
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
// import '../firebase'
// import * as firebase from 'firebase'
// import db from '../firebase'
// import * as Google from 'expo-google-app-auth'
// import { GoogleUser, GoogleAuthData } from "expo-google-sign-in";
// export default class Login extends Component{

//     state = {
//          email: '',
//          password: '',
//          errorMessage: null,
//          firstName: '',
//          lastName: '',
//          signingUp: false
//     }


//     signInWithGoogleAsync = async () =>{
//     try {
//         const result = await Google.logInAsync({
//           behavior: "web",
//           androidClientId:
//             "122621961076-d4pv96gsva2bn8b4f64pe6ccu73j1r4d.apps.googleusercontent.com",
//           iosClientId:
//             "122621961076-bbv3j631vggpue3nilbsdms0ifj3cioq.apps.googleusercontent.com",
//           scopes: ["profile", "email"]
//         });

        
//         if (result.type === 'success') {
//             const credential = firebase.auth.GoogleAuthProvider.credential(result.idToken, result.accessToken)
//             const firebaseUserCredential = await firebase.auth().signInWithCredential(credential)

//             const collection = db.collection('users')

//             collection.doc(firebase.auth().currentUser.uid).set({
//                 firstName: result.user.givenName,
//                 lastName: result.user.familyName,
//                 email: result.user.email
//             })
//             return result.accessToken;
//         } else {
//             return { cancelled: true };
//         }
//     } catch (error) {
//         this.setState({ errorMessage: error.message })
//     }
// }

    

//     handleLogin = () => {
//         const {email, password} = this.state;
//         firebase.auth().signInWithEmailAndPassword(email, password)
//             .catch(error => this.setState({errorMessage: error.message}))
//     }

//     handleSignUp = () => {
//         firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then(user => {
//             const collection = db.collection('users')
            
//             collection.doc(user.user.uid).set({
//                 firstName: this.state.firstName,
//                 lastName: this.state.lastName,
//                 email: this.state.email
//             })
//         }
//         ).catch(error => this.setState({errorMessage: error.message}))
//     }
    // toggleSignUp = () => {
    //     console.log(firebase.auth().currentUser)
    //     this.setState({signingUp: !this.state.signingUp})
    // }

//     render() {
//         return (

//             <View style={styles.superContainer}>
//                 {!this.state.signingUp ?
//                 <View style={styles.container}>
//                     <View style={styles.innerContainer}>
//                         <Image
//                             style={{ width: 200, height: 200 }}
//                             source={require("../assets/weOut.png")}
//                         />
                    // <View style={styles.errorMessage}>
                    //     {this.state.errorMessage ? <Text style={styles.error}>{this.state.errorMessage}</Text> : <View />}
                    // </View>
//                     </View>
//                     <View style={styles.innerContainer}>
//                         <View>
//                             <TextInput
//                             autoCapitalize="none"
//                             onChangeText={email => this.setState({ email })}
//                             value={this.state.email}
//                             style={styles.texts}
//                             placeholder="Email"
//                             maxLength={30}
//                             />
//                             <TextInput
//                             autoCapitalize="none"
//                             onChangeText={password => this.setState({ password })}
//                             value={this.state.password}
//                             style={styles.texts}
//                             secureTextEntry={true}
//                             placeholder="Password"
//                             />
//                         </View> 
//                         <View>
//                             <View style={styles.button}>
//                                 <Button
//                                     title="Login"
//                                     onPress={this.handleLogin}
//                                 />
//                                 <Button
//                                 title="Sign Up"
//                                 onPress={this.toggleSignUp}
//                                 />
//                             </View>
//                             <View style={styles.oath}>
                                // <TouchableHighlight
                                //     onPress={this.signInWithGoogleAsync}
                                // >
                                // <Image
                                //     style={{ width: 43, height: 43, marginRight: 15 }}
                                //     source={require("../assets/googlebutton.png")}
                                // />
                                // </TouchableHighlight>
//                             </View>
//                         </View>
//                     </View>
//                 </View>
//                 :
                // <KeyboardAwareScrollView
                //     style={{ backgroundColor: '#4c69a5' }}
                //     resetScrollToCoords={{ x: 0, y: 0 }}
                //     contentContainerStyle={styles.container}
                //     scrollEnabled={true}
                //     enableOnAndroid={true}
                // >
//                     <View style={styles.innerContainer}>
//                         <Image
//                             style={{ width: 200, height: 200 }}
//                             source={require("../assets/weOut.png")}
//                         />
//                     <View style={styles.errorMessage}>
//                         {this.state.errorMessage ? <Text style={styles.error}>{this.state.errorMessage}</Text> : <View />}
//                     </View>
//                     </View>
//                     <View style={styles.innerContainer}>
//                         <View>
//                             <TextInput
//                               autoCapitalize="none"
//                               onChangeText={email => this.setState({ email })}
//                               value={this.state.email}
//                               style={styles.texts}
//                               placeholder="Email"
//                               maxLength={30}
//                             />
//                             <TextInput
//                               autoCapitalize="none"
//                               onChangeText={password => this.setState({ password })}
//                               value={this.state.password}
//                               style={styles.texts}
//                               secureTextEntry={true}
//                               placeholder="Password"
//                             />
//                         </View>
//                         <View>
//                             <TextInput
//                             autoCapitalize="none"
//                             onChangeText={firstName => this.setState({ firstName })}
//                             value={this.state.firstName}
//                             style={styles.texts}
//                                 placeholder="First Name"
//                             maxLength={30}
//                             />
//                             <TextInput
//                                 autoCapitalize="none"
//                                 onChangeText={lastName => this.setState({ lastName })}
//                                 value={this.state.lastName}
//                                 style={styles.texts}
//                                 placeholder="Last Name"
//                             />
//                             <View>
//                                 <Button
//                                     title="Submit"
//                                     onPress={this.handleSignUp}
//                                 />
//                             </View>
//                             <View style={styles.haveAccount}>
//                                 <Text>
//                                     Already have an account?   
//                                 </Text>
//                                 <Button
//                                     title="Log In"
//                                     onPress={this.toggleSignUp}
//                                 />
//                             </View>
//                         </View>
//                     </View>
//                 </KeyboardAwareScrollView>
//                 }
//             </View>
//         )
//     }
// }

// const styles = StyleSheet.create({
//     errorMessage: {
//         borderColor: '#CCCCCC',
//         borderTopWidth: 1,
//         borderBottomWidth: 1,
//         alignItems: "center",
//         justifyContent: "center"
//     },
//     oath: {
//         flexDirection: "row",
//         marginBottom: 300
//     },
//     button: {
//         flexDirection: "row"
//     },
//     container: {
//         flex: 1,
//         backgroundColor: '#fff'
//     },
//     superContainer: {
//         flex: 1,
//         backgroundColor: '#fff'
//     },
//     innerContainer: {
//         backgroundColor: '#ff7f50',
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
//     texts: {
//         height: 50,
//         fontSize: 25,
//         borderColor: '#CCCCCC',
//         borderTopWidth: 1,
//         borderBottomWidth: 1,
//         width: 310,
//         textAlign: "center"
//     },
//     haveAccount: {
//         flexDirection: "row",
//         justifyContent: "center",
//         alignItems: 'center',
//         marginTop: 20
//     }
// })


import React, { Component } from 'react';
import "../firebase";
import * as firebase from "firebase";
import db from "../firebase";
import * as Google from "expo-google-app-auth";
import {
    TextInput,
    Alert,
    Image,
    TouchableHighlight
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Dimensions,
} from 'react-native';
import { Input, Button, Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;


export default class Login extends Component {

    state = {
        email: '',
        password: '',
        errorMessage: null,
        firstName: '',
        lastName: '',
        signingUp: false
    }



    signInWithGoogleAsync = async () => {
        try {
            const result = await Google.logInAsync({
                behavior: "web",
                androidClientId:
                    "122621961076-d4pv96gsva2bn8b4f64pe6ccu73j1r4d.apps.googleusercontent.com",
                iosClientId:
                    "122621961076-bbv3j631vggpue3nilbsdms0ifj3cioq.apps.googleusercontent.com",
                scopes: ["profile", "email"]
            })
            if (result.type === 'success') {
                const credential = firebase.auth.GoogleAuthProvider.credential(result.idToken, result.accessToken)
                const firebaseUserCredential = await firebase.auth().signInWithCredential(credential)

                const collection = db.collection('users')

                collection.doc(firebase.auth().currentUser.uid).set({
                    firstName: result.user.givenName,
                    lastName: result.user.familyName,
                    email: result.user.email
                }, { merge: true })
                return result.accessToken;
            } else {
                return { cancelled: true };
            }
        } catch (error) {
            this.setState({ errorMessage: error.message })
        }
    }


    handleLogin = () => {
        const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .catch(error => this.setState({ errorMessage: error.message }))
    }


    handleSignUp = () => {
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then(user => {
            const collection = db.collection('users')

            collection.doc(user.user.uid).set({
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email
            }, { merge: true})
        }
        ).catch(error => this.setState({ errorMessage: error.message }))
    }

    toggleSignUp = () => {
        this.setState({ signingUp: !this.state.signingUp })
    }



    render() {

        return (
            <View style={styles.container}>
                <ImageBackground source={{ uri: 'https://images.unsplash.com/photo-1539136831565-c85f368448a3?ixlib=rb-1.2.1&w=1000&q=80'}} style={styles.bgImage}>

                <View 
                style={styles.TopBgImage}
                        backgroundColor="rgba(52, 52, 52, 0.8)">
                    {!this.state.signingUp ?
                    <View style={styles.loginView}>
                                <View style={styles.errorMessage}>
                                    {this.state.errorMessage ? <Text style={styles.error}>{this.state.errorMessage}</Text> : <View />}
                                </View>
                        <View style={styles.logo}>
                        <Image
                            style={{ width: 200, height: 200 }}
                            source={require("../assets/weOut2.png")}
                        />
                        </View>
                        <View style={styles.loginInput}>
                            <Input
                                leftIcon={
                                    <Icon
                                        name="user-o"
                                        type="font-awesome"
                                        color="white"
                                        size={25}
                                    />
                                }
                                inputStyle={{ marginLeft: 10, color: 'white' }}

                                containerStyle={{ marginVertical: 10 }}
                                onChangeText={email => this.setState({ email })}
                                value={this.state.email}
                                placeholder="Email"
                                autoCapitalize="none"
                                autoCorrect={false}
                                placeholderTextColor="white"

                            />
                            <Input
                                leftIcon={
                                    <Icon
                                        name="lock"
                                        type="font-awesome"
                                        color="white"
                                        size={25}
                                    />
                                }
                                inputStyle={{ marginLeft: 10, color: 'white' }}

                                containerStyle={{ marginVertical: 10 }}
                                onChangeText={password => this.setState({ password })}
                                value={this.state.password}
                                placeholder="Password"
                                secureTextEntry={true}
                                autoCapitalize="none"
                                autoCorrect={false}
                                placeholderTextColor="white"

                            />
                        </View>
                        <TouchableOpacity onPress={this.handleLogin}>
                            <Button
                                title="LOG IN"
                                activeOpacity={1}
                                underlayColor="transparent"
                                buttonStyle={{
                                    height: 50,
                                    width: 250,
                                    backgroundColor: 'transparent',
                                    borderWidth: 2,
                                    borderColor: 'white',
                                    borderRadius: 30,
                                }}
                                containerStyle={{ marginVertical: 10 }}
                                titleStyle={{ fontWeight: 'bold', color: 'white' }}
                            />
                        </TouchableOpacity>

                        <View style={styles.footerView}>
                            <Text style={{ color: 'grey' }}>New here?</Text>
                            <TouchableOpacity onPress={this.toggleSignUp}>
                                <Button
                                    title="Sign Up"
                                    type="clear"
                                    activeOpacity={0.5}
                                    titleStyle={{ color: 'white', fontSize: 15 }}
                                    containerStyle={{ marginTop: -10 }}
                                />
                            </TouchableOpacity>
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
                    :
                //     <KeyboardAwareScrollView
                    
                //     resetScrollToCoords={{ x: 0, y: 0 }}
                //     contentContainerStyle={styles.container}
                //     scrollEnabled={true}
                //     enableOnAndroid={true}
                // >
                        <View style={styles.loginView}>
                                <View style={styles.errorMessage}>
                                    {this.state.errorMessage ? <Text style={styles.error}>{this.state.errorMessage}</Text> : <View />}
                                </View>
                            <View style={styles.logo}>
                                <Image
                                    style={{ width: 200, height: 200 }}
                                    source={require("../assets/weOut2.png")}
                                />
                            </View>
                            <View style={styles.loginInput}>
                                <Input
                                    leftIcon={
                                        <Icon
                                            name="user-o"
                                            type="font-awesome"
                                            color="white"
                                            size={25}
                                        />
                                    }
                                    inputStyle={{ marginLeft: 10, color: 'white' }}

                                    containerStyle={{ marginVertical: 10 }}
                                    onChangeText={firstName => this.setState({ firstName })}
                                    value={this.state.firstName}
                                    placeholder="First Name"
                                    autoCorrect={false}
                                    placeholderTextColor="white"
                                />
                                <Input
                                    leftIcon={
                                        <Icon
                                            name="user-o"
                                            type="font-awesome"
                                            color="white"
                                            size={25}
                                        />
                                    }
                                    inputStyle={{ marginLeft: 10, color: 'white' }}

                                    containerStyle={{ marginVertical: 10 }}
                                    onChangeText={lastName => this.setState({ lastName })}
                                    value={this.state.lastName}
                                    placeholder="Last Name"
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    placeholderTextColor="white"

                                />
                                <Input
                                    leftIcon={
                                        <Icon
                                            name="user-o"
                                            type="font-awesome"
                                            color="white"
                                            size={25}
                                        />
                                    }
                                    inputStyle={{ marginLeft: 10, color: 'white' }}

                                    containerStyle={{ marginVertical: 10 }}
                                    onChangeText={email => this.setState({ email })}
                                    value={this.state.email}
                                    placeholder="Email"
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    placeholderTextColor="white"
                                />
                                <Input
                                    leftIcon={
                                        <Icon
                                            name="lock"
                                            type="font-awesome"
                                            color="white"
                                            size={25}
                                        />
                                    }
                                    inputStyle={{ marginLeft: 10, color: 'white' }}

                                    containerStyle={{ marginVertical: 10 }}
                                    onChangeText={password => this.setState({ password })}
                                    value={this.state.password}
                                    placeholder="Password"
                                    secureTextEntry={true}
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    placeholderTextColor="white"

                                />
                                
                            </View>
                            <TouchableOpacity onPress={this.handleSignUp}
                            >
                                <Button
                                    title="SUBMIT"
                                    activeOpacity={1}
                                    underlayColor="transparent"
                                    buttonStyle={{
                                        height: 50,
                                        width: 250,
                                        backgroundColor: 'transparent',
                                        borderWidth: 2,
                                        borderColor: 'white',
                                        borderRadius: 30,
                                    }}
                                    containerStyle={{ marginVertical: 10 }}
                                    titleStyle={{ fontWeight: 'bold', color: 'white' }}
                                />
                            </TouchableOpacity>

                            <View style={styles.footerView}>
                                <Text style={{ color: 'white' }}>Already a User?</Text>
                                <TouchableOpacity onPress={this.toggleSignUp}>
                                    <Button
                                        title="Log In"
                                        type="clear"
                                        activeOpacity={0.5}
                                        titleStyle={{ color: 'white', fontSize: 15 }}
                                        containerStyle={{ marginTop: -10 }}

                                    />
                                </TouchableOpacity>
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
                    }
                    </View>
                </ImageBackground>
                

            </View>
        );
    }
}

const styles = StyleSheet.create({
    error: {
        color: "white",
  
    },
    container: {
        flex: 1,
    },
    TopBgImage: {
        flex: 1,
        top: 100,
        left: 0,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        width: 300,
    },
    bgImage: {
        flex: 1,
        top: 0,
        left: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginView: {
        marginTop: 150,
        backgroundColor: 'transparent',
        width: 250,
        height: 400,
    },
    logo: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        marginVertical: -150
    },
    travelText: {
        color: 'white',
        fontSize: 30,
        fontFamily: 'bold',
    },
    plusText: {
        color: 'white',
        fontSize: 30,
        fontFamily: 'regular',
    },
    loginInput: {
        flex: 4,
        marginTop: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footerView: {
        marginTop: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});