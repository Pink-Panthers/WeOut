import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

const Footer = props => {
    return (
        <View style={styles.footer}>

        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        borderColor: 'black',
        borderWidth: 0.6,
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'white'
    }
})

export default Footer