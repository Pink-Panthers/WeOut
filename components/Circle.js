import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'
import Menu from './Menu'

const { width, height } = Dimensions.get("screen");

export default function Circle (props) {
    const circleData = props.navigation.getParam('circle')
    console.log(circleData)
    return (
        <View style={styles.container}>
            <Menu navigation={props.navigation}/>
            <View>
                <Text style={styles.title}>{circleData.name}</Text>
            </View>
            <MaterialIcons name="add-circle" size={32} style={styles.add} />
            <View style={styles.body}>

                <View style={styles.events}>
                    <Text style={styles.subtitle}>Upcoming Events</Text>
                    {
                        circleData.upcomingEvents[0]
                        ? circleData.upcomingEvents.map(event => 
                            <Text key={Math.random() * 999}>{event}</Text>)
                        : <Text>No Upcoming Events</Text>
                    }
                    </View>

                <View style={styles.members}>
                    <Text style={styles.subtitle}>Members</Text>
                    {
                        circleData.members.map(member => <Text key={Math.random() * 999}>{member}</Text>)
                    }
                </View>

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
    },
    add: {
        position: 'absolute',
        top: 40,
        paddingRight: 14,
        alignSelf: 'flex-end'
    },
    body: {
        alignItems: 'center',
        flex: 1
    },
    events: {
        flex: 1,
        marginTop: 60
    },
   members: {
       flex: 1
   },
   subtitle: {
       fontSize: 20,
       backgroundColor: "#ff7f50",
       width: width * .9,
       borderColor: 'black',
       borderWidth: 1,
       textAlign: 'center'
   }
});