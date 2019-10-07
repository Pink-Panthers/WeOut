import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler'

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
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },
    bottom: {
        flex: 1,
        backgroundColor: 'tan',
        paddingTop: 20,
        paddingBottom: 450
    },
    link: {
        flex: 1,
        fontSize: 20,
        padding: 2,
        paddingLeft: 12,
        margin: 6,
        textAlign: 'left'
    },
    logo: {
        paddingTop: 40,
        paddingLeft: 12,
        width: 100,
        height: 100
    }
})