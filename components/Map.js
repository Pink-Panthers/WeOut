import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import MapView, { Marker } from 'react-native-maps'

const Map = props => {
    return (
        <MapView
            region={newYork}
            style={styles.map}
        >
        </MapView>
    )
}

const styles = StyleSheet.create({
    map: {
        flex: 1,
        width: '100%',
        borderColor: 'black',
        borderWidth: 0.6
    }
})

const newYork = {
    latitude: 40.7473735256486,
    longitude: -73.98564376909184,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
}

export default Map