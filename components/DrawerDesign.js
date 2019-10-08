import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler'

export default class DrawerDesign extends React.Component {
    navLink(nav, text) {
        return (
            <TouchableOpacity 
                onPress={() => this.props.navigation.navigate(nav)}
            >
                <View style={styles.circle}>
                    <Image
                        style={styles.icon}
                        source={require("../assets/weOut.png")}
                    />
                    <Text style={styles.link}>{text}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.top}>
                    <Image
                        style={styles.logo}
                        source={require("../assets/weOut.png")}
                    />
                </View>
                <ScrollView style={styles.bottom}>
                <View>
                    {this.navLink('Home', 'Home')}
                    {this.navLink('Circle', 'Circle')}
                    {this.navLink('Map', 'Map')}
                    {this.navLink('Login', 'Login')}
                </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    top: {
        height: 140,
        backgroundColor: '#ff7f50',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    bottom: {
        flex: 1,
        backgroundColor: 'tan',
        paddingTop: 10
    },
    link: {
        flex: 1,
        fontSize: 16,
        textAlign: 'center'
    },
    logo: {
        marginBottom: 6,
        width: 100,
        height: 100
    },
    circle: {
        height: 100,
        alignItems: 'center'
    },
    icon: {
        width: 80,
        height: 80
    }
})