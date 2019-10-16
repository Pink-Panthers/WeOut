import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground
} from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Input, Button, Icon } from "react-native-elements";
import { MaterialIcons } from "@expo/vector-icons";
import Menu from "./Menu";
import db from '../firebase'

export default class Circle extends Component {
    constructor(props) {
        super(props)
    }

    state = {
        addMember: false,
        member: '',
        firstName: '',
        lastName: '',
        circle: {}
    }

    toggleAddMember = () => {
        this.setState({ addMember: !this.state.addMember })
    }

    addUser = () => {
        let usersRef = db.collection('users');
        const circleData = this.props.navigation.getParam("circle");
        let allUsers = usersRef.get().then(users => {
                users.forEach(doc => {
                    console.log(circleData.uid)
                    this.state.member === doc.data().email ? db.collection('circles').doc(`${circleData.uid}`).update({
                        memberIDs: firebase.firestore.FieldValue.arrayUnion(`${doc.id}`), memberNames: firebase.firestore.FieldValue.arrayUnion(`${doc.data().firstName} ${doc.data().lastName}`)      
                    })

                    : console.log('nomatch')

                })

                users.forEach(doc => {
                    this.state.member === doc.data().email ? db.collection('users').doc(`${doc.id}`).update({
                        circles: firebase.firestore.FieldValue.arrayUnion(`${circleData.uid}`)
                    })
                        : console.log('nomatch')
                }) 
            })
        
        this.toggleAddMember()
        
    }
    
    render () {
        
        const circleData = this.props.navigation.getParam("circle")
        console.log('trying', circleData)
        return (
        <View style={styles.container}>
            <ImageBackground
                source={{
                    uri:
                        "https://www.toptal.com/designers/subtlepatterns/patterns/vertical_cloth.png"
                }}
                style={styles.bgImage}
            >
            <Menu navigation={this.props.navigation}/>
            <View>
                <Text style={styles.title}>{circleData ? circleData.name : null}</Text>
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
                                onPress={() => this.props.navigation.navigate('MapContainer', {circleData})} 
                            />
                        </View>
                    </View>
                    <View style={styles.eventList}>
                    <ScrollView>
                    {
                        circleData.upcomingEvents
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
                        <TouchableOpacity onPress={this.toggleAddMember}>
                            <MaterialIcons 
                                name="add-circle" 
                                style={styles.add} 
                            />
                        </TouchableOpacity>
                        </View>
                    </View>

                        <View>
                            {this.state.addMember ?
                                <View>
                                    <Input
                                        leftIcon={
                                            <Icon
                                                name="user"
                                                type="font-awesome"
                                                color="white"
                                                size={25}
                                            />
                                        }
                                        inputStyle={{ marginLeft: 10, color: 'white' }}

                                        containerStyle={{ marginVertical: 10 }}
                                        onChangeText={member => this.setState({ member })}
                                        value={this.state.member}
                                        placeholder="Add User"
                                        autoCapitalize="none"
                                        autoCorrect={false}
                                        placeholderTextColor="white"

                                    />
                                    <TouchableOpacity onPress={this.addUser}
                                    >
                                        <Button
                                            title="SUBMIT"
                                            activeOpacity={1}
                                            underlayColor="transparent"
                                            buttonStyle={{
                                                height: 50,
                                                width: 150,
                                                backgroundColor: 'transparent',
                                                borderWidth: 2,
                                                borderColor: 'white',
                                                borderRadius: 30,
                                            }}
                                            containerStyle={{ marginVertical: 10 }}
                                            titleStyle={{ fontWeight: 'bold', color: 'white' }}
                                        />
                                    </TouchableOpacity>
                                </View>

                                : <View></View>}
                        </View>

                    <View style={styles.memberList}>
                    <ScrollView>
                    {   circleData.memberNames ?
                        circleData.memberNames.map(member => 
                        <Text key={Math.random() * 999} style={styles.member}>{member}</Text>) : null
                    }
                    </ScrollView>
                    </View>
                </View>
            </View>
        </ImageBackground>
    </View>
  )
}
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
        top: 40,
        color: 'white'
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




