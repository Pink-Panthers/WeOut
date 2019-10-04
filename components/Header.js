import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Header = () => {
    return (
        <View style={styles.header}>
            <Text>WeOut</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        borderColor: 'black',
        borderWidth: 0.6,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "flex-end",
        width: '100%',
        backgroundColor: 'white'
    }
})

export default Header