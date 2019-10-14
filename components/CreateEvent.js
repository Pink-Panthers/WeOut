import React, { Component } from "react"
import { StyleSheet, View, Text, Dimensions } from "react-native"
import { TextInput, Button, Image, TouchableHighlight } from 'react-native'
import Menu from './Menu'
import DateTimePicker from '@react-native-community/datetimepicker';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars'

export default class CreateEvent extends Component{
    constructor(props) {
        super(props)
        this.state = {
            eventName: '',
            placeName: '',
            address: '',
            date: new Date('2020-06-12T14:42:42'),
            mode: 'date',
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Menu navigation={this.props.navigation}/>
                <TextInput
                    autoCapitalize="none"
                    onChangeText={eventName => {this.setState({ eventName })}}
                    value={this.state.eventName}
                    style={styles.text}
                    placeholder="Event Name"
                    maxLength={10}
                />
                <TextInput
                    autoCapitalize="none"
                    onChangeText={placeName => {this.setState({ placeName })}}
                    value={this.state.placeName}
                    style={styles.text}
                    placeholder="Place Name"
                    maxLength={10}
                />
                <TextInput
                    autoCapitalize="none"
                    onChangeText={address => {this.setState({ address })}}
                    value={this.state.address}
                    style={styles.text}
                    placeholder="Address"
                    maxLength={10}
                />
                <View style={styles.calendar}>
                    <CalendarList
                        // Callback which gets executed when visible months change in scroll view. Default = undefined
                        onVisibleMonthsChange={(months) => {console.log('now these months are visible', months);}}
                        // Max amount of months allowed to scroll to the past. Default = 50
                        pastScrollRange={0}
                        // Max amount of months allowed to scroll to the future. Default = 50
                        futureScrollRange={1}
                        // Enable or disable scrolling of calendar list
                        scrollEnabled={true}
                        // Enable or disable vertical scroll indicator. Default = false
                        showScrollIndicator={true}
                    />          
                </View>
                <Button title="Submit"/>
            </View>
        )
    }
}

const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 48,
        alignItems: 'center',
    },
    text: {
        height: 50,
        fontSize: 25,
        borderColor: '#CCCCCC',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        width: 260,
        justifyContent: 'center',
        textAlign: "center"
    },
    calendar: {
        borderWidth: 1,
        borderColor: 'gray',
        height: 320
    }
})