import React from 'react'
import { StyleSheet, Alert } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default function Menu (props) {
    return (
        <Ionicons
            name="md-menu"
            size={32}
            style={styles.menu}
            onPress={() => props.navigation.toggleDrawer()}
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