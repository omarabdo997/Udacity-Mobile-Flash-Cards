import React, { Component } from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {purple} from '../utils/colors'


export default class Quiz extends Component {

    render() {
        const {score, totalQuestions, goBack, restart} = this.props
        return (
            <View style={styles.container}>
                <View >
                    <Text style={styles.scoreText}>You Scored</Text>
                    <Text style={styles.resultText}>{score}/{totalQuestions}</Text>
                </View>
               
                <View >
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={restart}
                    >
                        <Text style={styles.buttonText}>Restart Quiz</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={goBack}
                    >
                        <Text style={styles.buttonText}>Back to Deck</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
       flex: 1,
       alignItems : 'center',
       marginBottom: 50,
       justifyContent: 'space-between'      
    },
    buttonText: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'white'
    },
    scoreText: {
        marginTop: 20,
        fontSize: 30,
        color: purple,
        alignSelf: 'center'
    },
    resultText: {
        marginTop: 20,
        fontSize: 50,
        alignSelf: 'center',
        color: purple
    },
    button: {
        borderWidth: 1,
        padding: 25,
        marginTop: 'auto',
        marginBottom: 100,
        backgroundColor: 'black',
        borderRadius: 10
    },
    
})