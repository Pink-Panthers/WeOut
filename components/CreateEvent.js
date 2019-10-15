import React, { Component } from "react"
import { StyleSheet, View, Text, Dimensions } from "react-native"
import { TextInput, Button } from 'react-native'
import Menu from './Menu'
import { CalendarList } from 'react-native-calendars'
import DateTimePicker from "react-native-modal-datetime-picker";

export default class CreateEvent extends Component{
    constructor(props) {
        super(props)
        this.state = {
            visible: false,
            eventName: '',
            placeName: '',
            address: ''
        }
        this.showTimePicker = this.showTimePicker.bind(this)
        this.hideTimePicker = this.hideTimePicker.bind(this)
    }

    showTimePicker () {
        this.setState({visible: true})
    }

    hideTimePicker () {
        this.setState({visible: false})
    }

    render() {
        return (
            <View style={styles.container}>
                <Menu navigation={this.props.navigation}/>
                <Text style={styles.title}>Create Event</Text>
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
                        // Max amount of months allowed to scroll to the past. Default = 50
                        pastScrollRange={0}
                        // Max amount of months allowed to scroll to the future. Default = 50
                        futureScrollRange={1}
                        // Enable or disable scrolling of calendar list
                        scrollEnabled={true}
                        // Enable or disable vertical scroll indicator. Default = false
                        showScrollIndicator={true}
                        minDate={new Date()}
                        maxDate={new Date(Date.now() + 12096e5)}
                        onDayPress={() => console.log('DAY PRESSED!')}
                    />          
                </View>
                <DateTimePicker
                    isVisible={this.state.visible}
                    onConfirm={() => console.log('YERRRRRR')}
                    onCancel={this.hideTimePicker}
                    mode='time'
                    titleIOS='Select Time'
                />
                <Button title='Select Time' onPress={this.showTimePicker}/>
                <Button title="Submit"/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 48,
        alignItems: 'center',
    },
    text: {
        height: 40,
        fontSize: 20,
        borderColor: '#CCCCCC',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        width: 320,
        justifyContent: 'center',
        textAlign: "center",
        marginVertical: 6
    },
    calendar: {
        height: 320
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 20
    }
})