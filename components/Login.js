import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Keyboard} from 'react-native';
import { TextInput, Button, Alert, Image, TouchableHighlight } from 'react-native';


export default function Login() {
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Image
                    style={{ width: 200, height: 200 }}
                    source={require("../assets/weOut.png")}
                />
            </View>
            <View style={styles.innerContainer}>
                <View>
                    <TextInput
                        style={styles.texts}
                        placeholder="Email"
                        maxLength={30}
                        onBlur={Keyboard.dismiss}
                    />
                    <TextInput
                        style={styles.texts}
                        secureTextEntry={true}
                        placeholder="Password"
                    />
                </View>
                <View style={styles.button}>
                    <Button
                    title="Login"
                    onPress={() => Alert.alert("Login Button Pressed")}
                    />
                    <Button
                    title="Sign Up"
                    onPress={() => Alert.alert("Sign Up Button Pressed")}
                    />
                </View>
                <View style={styles.oath}>
                    <TouchableHighlight onPress={() => Alert.alert("Sign in with Google.")}>
                        <Image
                            style={{ width: 43, height: 43, marginRight: 15 }}
                            source={require("../assets/googlebutton.png")}
                            />
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => Alert.alert("Sign in with Facebook.")}>
                        <Image
                            style={{ width: 40, height: 40, marginLeft: 15 }}
                            source={require("../assets/facebookbutton.png")}  
                        />
                    </TouchableHighlight>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
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
})