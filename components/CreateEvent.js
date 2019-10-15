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
            startVisibility: false,
            endVisibility: false,
            eventName: '',
            placeName: '',
            address: '',
            startTime: '',
            endTime: ''
        }
        this.showStartPicker = this.showStartPicker.bind(this)
        this.hideStartPicker = this.hideStartPicker.bind(this)
        this.handleStartPicker = this.handleStartPicker.bind(this)
        this.showEndPicker = this.showEndPicker.bind(this)
        this.hideEndPicker = this.hideEndPicker.bind(this)
        this.handleEndPicker = this.handleEndPicker.bind(this)
    }

    showStartPicker () {
        this.setState({startVisibility: true})
    }

    hideStartPicker () {
        this.setState({startVisibility: false})
    }

    handleStartPicker (date) {
        this.setState({startTime: date})
        this.hideStartPicker()
        console.log(this.state.startTime)
    }

    showEndPicker () {
        this.setState({endVisibility: true})
    }

    hideEndPicker () {
        this.setState({endVisibility: false})
    }

    handleEndPicker (date) {
        this.setState({endTime: date})
        this.hideEndPicker()
        console.log(this.state.endTime)
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
                    isVisible={this.state.startVisibility}
                    onConfirm={this.handleStartPicker}
                    onCancel={this.hideStartPicker}
                    mode='datetime'
                    titleIOS='Select Start Date and Time'
                />
                <DateTimePicker
                    isVisible={this.state.endVisibility}
                    onConfirm={this.handleEndPicker}
                    onCancel={this.hideEndPicker}
                    mode='datetime'
                    titleIOS='Select End Date and Time'
                />
                <Button title='Select Start Date and Time' onPress={this.showStartPicker}/>
                <Button title='Select End Date and Time' onPress={this.showEndPicker}/>
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