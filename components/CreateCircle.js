import React, { Component } from "react"
import { StyleSheet, View, Text } from "react-native"
import { TextInput, Button, Image, TouchableHighlight } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import firebase from 'firebase'
import db from '../firebase'
import Menu from './Menu'

export default class CreateCircle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    

    handleSubmit() {
        if(firebase.auth().currentUser.displayName) {
            db.collection('circles').doc().set({
                name: this.state.name,
                memberIDs: [firebase.auth().currentUser.uid],
                memberNames: [firebase.auth().currentUser.displayName]
            })
            .then( () => {
                this.setState({name: ''})
                this.props.navigation.navigate('Home')
            }).catch(err => {
                console.log('ERROR WHEN ADDING NEW CIRCLE!!', err)
            })
        }else {
            db.collection('users').doc(firebase.auth().currentUser.uid).get()
            .then( user => {
                db.collection('circles').doc().set({
                    name: this.state.name,
                    memberIDs: [firebase.auth().currentUser.uid],
                    memberNames: [user.data().firstName + ' ' + user.data().lastName]
                })
                .then( () => {
                    this.setState({name: ''})
                    this.props.navigation.navigate('Home')
                })
                .catch(err => {
                    console.log('ERROR WHEN ADDING NEW CIRCLE!!', err)
                })
            })
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Menu navigation={this.props.navigation}/>
                <TextInput
                    autoCapitalize="none"
                    onChangeText={name => {this.setState({ name })}}
                    value={this.state.name}
                    style={styles.text}
                    placeholder="Circle Name"
                    maxLength={10}
                />
                 <Button
                    title="Submit"
                    onPress={this.handleSubmit}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: "center"
    },
    text: {
        height: 50,
        fontSize: 25,
        borderColor: '#CCCCCC',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        width: 250,
        justifyContent: 'center',
        textAlign: "center"
    }
})