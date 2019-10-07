import React from 'react'
import { View, Text, Platform, Dimensions, StyleSheet} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default class DrawerDesign extends React.Component {
 
    navLink(nav, text) {
        return (
            <TouchableOpacity 
                style={{height: 40}} 
                onPress={() => this.props.navigation.navigate(nav)}
            >
                <Text style={styles.link}>{text}</Text>
            </TouchableOpacity>
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.top}>
                    <Text style={{paddingTop: 40}}>WeOut</Text>
                </View>
                <View style={styles.bottom}>
                    {this.navLink('Home', 'Home')}
                    {this.navLink('Circle', 'Circle')}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red'
    },
    top: {
        height: 100,
        backgroundColor: 'yellow',
    },
    bottom: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 20,
        paddingBottom: 450
    },
    link: {
        flex: 1,
        fontSize: 20,
        padding: 6,
        paddingLeft: 14,
        margin: 5,
        textAlign: 'left'
    }
})