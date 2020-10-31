import React, { Component } from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Card from './Card'


export default class Quiz extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.progressText}>5/8</Text>
                <View style={{flex:10}}>
                    <Card />
                </View>
               
                <View style={{flex:10}}>
                    <TouchableOpacity style={styles.correctButton}>
                        <Text style={styles.quizText}>Correct</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.incorrectButton}>
                        <Text style={styles.quizText}>Incorrect</Text>
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
    progressText: {
        fontSize: 30,
        color: 'grey',
        alignSelf: 'flex-start',
        marginLeft: 30,
        flex: 1

    },
    quizText: {
        fontSize: 30,
        color: 'white',
        alignSelf: 'center'
    },
    correctButton: {
        borderWidth: 1,
        padding: 25,
        marginTop: 'auto',
        marginBottom: 100,
        backgroundColor: 'green',
        borderRadius: 10
    },
    incorrectButton: {
        marginTop: 'auto',
        borderWidth: 1,
        padding: 25,
        marginTop: 'auto',
        marginBottom: 100,
        backgroundColor: 'red',
        borderRadius: 10
    }
})