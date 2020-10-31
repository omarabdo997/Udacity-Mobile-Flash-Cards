import React, { Component } from 'react'
import {View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView} from 'react-native'


export default class AddDeck extends Component {
    state = {
        value: ''
    }
    onChange = (text) => {
        this.setState(() => ({
            value: text
        }))
    }
    onSubmit = () => {
        alert(this.state.value)
    }
    render() {
        const {value} = this.state
        return (
            <KeyboardAvoidingView behavior='height' style={styles.container}>
                <Text style={styles.primaryText}>What is the title of your new deck?</Text>
                <TextInput
                    style={styles.textInput}
                    value={value}
                    onChangeText={(text) => this.onChange(text)}
                />
                <TouchableOpacity 
                    style={styles.submitButton}
                    onPress={this.onSubmit}
                >
                    <Text style={styles.secondryText}>Create Deck</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    primaryText: {
        fontSize: 50,
        padding: 20
    },
    secondryText: {
        fontSize: 30,
        color: 'white'
    },
    textInput: {
        height:50,
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 10,
        alignSelf: "stretch",
        marginLeft: 30,
        marginRight: 30,
        fontSize: 30,
        padding: 10
    },
    submitButton: {
        borderWidth: 1,
        padding: 25,
        marginTop: 'auto',
        marginBottom: 100,
        backgroundColor: 'black',
        borderRadius: 10
    }
})