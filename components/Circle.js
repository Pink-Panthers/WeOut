import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Menu from './Menu'

export default function Circle (props) {
    return (
        <View style={styles.container}>
            <Menu navigation={props.navigation}/>
            <View>
                <Text style={styles.header}>Single Circle</Text>
            </View>
        </View>
    )
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