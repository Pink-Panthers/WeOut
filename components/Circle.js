import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Menu from './Menu'

export default function Circle (props) {
    return (
        <View style={styles.container}>
            <Menu navigation={props.navigation}/>
            <View>
                <Text style={styles.title}>Single Circle</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        top: 40
    }
});