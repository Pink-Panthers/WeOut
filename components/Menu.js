import React from 'react'
import { StyleSheet, Alert } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default function Menu () {
    return (
        <Ionicons
            name="md-menu"
            color="black"
            size={32}
            style={styles.menu}
            onPress={() => Alert.alert('Menu button pressed!')}
        />
    )
}

const styles = StyleSheet.create({
    menu: {
        zIndex: 9,
        position: 'absolute',
        top: 40,
        left: 20
    }
})