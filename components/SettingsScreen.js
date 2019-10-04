import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default class SettingsScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.header}>Settings</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 45,
        backgroundColor: '#F5FCFF',
    },
    header: {
        fontSize: 25,
        textAlign: 'center',
        margin: 10,
        fontWeight: 'bold'
    }
});