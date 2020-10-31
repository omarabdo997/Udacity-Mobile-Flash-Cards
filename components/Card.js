import React, {Component} from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'


export default class Card extends Component {

    state = {
        front: true
    }
    
    onPress = () => {
        this.setState((currentState) => ({
            front: !currentState.front
        }))
    }

    render() {
        const {question, answer} = this.props
        const {front} = this.state
        return (
            <View style={styles.container}>
                <Text style={styles.primaryText}>{front?question:answer}</Text>
                <TouchableOpacity onPress={this.onPress}>
                    <Text style={styles.secondaryText}>{front?'Show Answer':'Show Question'}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
       alignItems : 'center',
       marginBottom: 50

       
    },
    primaryText: {
        fontSize: 50,
        alignSelf: 'center',
        padding: 20 
    },
    secondaryText: {
        fontSize: 30,
        color: 'grey',
        alignSelf: 'center' 

    },
    
})