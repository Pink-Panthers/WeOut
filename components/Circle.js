import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons'
import Menu from './Menu'
import db from '../firebase';

export default function Circle (props) {
    const circleData = props.navigation.getParam('circle')
    // const events = () => circleData.upcomingEvents.map(eventID => {
    //     db.collection('events')
    //     .doc(eventID)
    //     .get()
    // })
    // console.log(events)

    return (
        <View style={styles.container}>
            <Menu navigation={props.navigation}/>
            <View>
                <Text style={styles.title}>{circleData.name}</Text>
            </View>
            <View style={styles.body}>

                <View style={styles.events}>
                    <View style={styles.subtitle}>
                        <View style={styles.icon}></View>
                        <Text style={styles.titleText}>Upcoming Events</Text>
                        <View style={styles.icon}>
                            <MaterialIcons 
                                name="add-circle"
                                style={styles.add} 
                                onPress={() => props.navigation.navigate('MapContainer')} 
                            />
                        </View>
                    </View>
                    <View style={styles.eventList}>
                    <ScrollView>
                    {
                        circleData.upcomingEvents[0]
                        ? circleData.upcomingEvents.map(event => 
                            <Text key={Math.random() * 999} style={styles.event}>{event}</Text>)
                        : <Text>No Upcoming Events</Text>
                    }
                    </ScrollView>
                    </View>
                </View>

                <View style={styles.members}>
                    <View style={styles.subtitle}>
                        <View style={styles.icon}></View>
                        <Text style={styles.titleText}>Members</Text>
                        <View style={styles.icon}>
                            <MaterialIcons 
                                name="add-circle" 
                                style={styles.add} 
                            />
                        </View>
                    </View>
                    <View style={styles.memberList}>
                    <ScrollView>
                    {
                        circleData.members.map(member => 
                        <Text key={Math.random() * 999} style={styles.member}>{member}</Text>)
                    }
                    </ScrollView>
                    </View>
                </View>

            </View>
        </View>
    )
}

const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
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
    body: {
        alignItems: 'center',
        flex: 1
    },
    events: {
        flex: 5,
        marginTop: 60
    },
   members: {
       flex: 3,
       paddingTop: 60
   },
   subtitle: {
       backgroundColor: "tan",
       width: width * 0.9,
       borderColor: 'black',
       borderWidth: 1,
       marginVertical: 10,
       paddingVertical: 6,
       borderRadius: 10,
       overflow: 'hidden',
       alignItems: 'center',
       justifyContent: 'center',
       flexDirection: 'row'
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
       marginVertical: 10,
       padding: 50,
       height: 120,
       backgroundColor: '#ffdbac',
       borderRadius: 10,
       overflow: 'hidden',
       textAlign: 'center'
   },
   member: {
        width: width * 0.3,
        borderColor: 'black',
        borderWidth: 1,
        marginVertical: 10,
        padding: 3,
        backgroundColor: '#ffdbac',
        textAlign: 'center',
        borderRadius: 10,
        overflow: 'hidden'
   },
   add: {
        fontSize: 22,
        alignSelf: 'flex-end',
        marginRight: 6
   },
   titleText: {
        fontSize: 16,
        flex: 2,
        textAlign: 'center'
   },
   icon: {
       flex: 1
   }
});