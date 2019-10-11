import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Button,
  ImageBackground
} from "react-native";
import { MaterialIcons } from '@expo/vector-icons'
import Menu from './Menu'

export default function Circle (props) {
    const circleData = props.navigation.getParam('circle')

    return (
        <View style={styles.container}>
            <ImageBackground
                source={{
                    uri:
                        "https://www.toptal.com/designers/subtlepatterns/patterns/vertical_cloth.png"
                }}
                style={styles.bgImage}
            >
            <Menu navigation={props.navigation}/>
            <View>
                <Text style={styles.title}>{circleData.name}</Text>
            </View>
            <MaterialIcons name="add-circle" size={32} style={styles.add} onPress={() => props.navigation.navigate('MapContainer')} />
            <View style={styles.body}>

                <View style={styles.events}>
                    <Text style={styles.subtitle}>Upcoming Events</Text>
                    <View style={styles.eventList}>
                    {
                        circleData.upcomingEvents[0]
                        ? circleData.upcomingEvents.map(event => 
                            <Text key={Math.random() * 999} style={styles.event}>{event}</Text>)
                        : <Text>No Upcoming Events</Text>
                    }
                    </View>
                </View>

                <View style={styles.members}>
                    <Text style={styles.subtitle}>Members</Text>
                    <View style={styles.memberList}>
                    {
                        circleData.members.map(member => 
                        <Text key={Math.random() * 999} style={styles.member}>{member}</Text>)
                    }
                    </View>
                </View>

            </View>
            </ImageBackground>

        </View>
    )
}

const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
    bgImage: {
        flex: 1,
        top: 0,
        left: 0,
        justifyContent: 'center',
        alignItems: 'center',
        width: 420
    },
    container: {
        flex: 1,
        backgroundColor: "#ff7f50",
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
        alignSelf: 'flex-end',
        zIndex: 9
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
       backgroundColor: "tan",
       width: width * 0.9,
       borderColor: 'black',
       borderWidth: 1,
       textAlign: 'center',
       marginVertical: 10,
       paddingVertical: 6,
       alignSelf: 'center'
   },
   eventList: {
       alignItems: 'center',
   },
   memberList: {
       marginLeft: 10,
       justifyContent: 'flex-start',
       flexDirection: 'row',
       flexWrap: 'wrap'
   },
   event: {
       width: width * 0.9,
       borderColor: 'black',
       borderWidth: 1,
       fontSize: 20,
       marginVertical: 10,
       padding: 3,
       backgroundColor: '#ffdbac'
   },
   member: {
        width: width * 0.42,
        borderColor: 'black',
        borderWidth: 1,
        fontSize: 20,
        margin: 10,
        padding: 3,
        backgroundColor: '#ffdbac',
        textAlign: 'center'
   }
});