import React, {Component} from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'


export default class Card extends Component {

    render() {
        const {question, answer, toggleCardFace, front} = this.props
        return (
            <View style={styles.container}>
                <Text style={styles.primaryText}>{front?question:answer}</Text>
                <TouchableOpacity onPress={toggleCardFace}>
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