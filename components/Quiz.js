import React, { Component } from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Card from './Card'
import Result from './Result'
import {connect} from 'react-redux'


class Quiz extends Component {

    state = {
        score: 0,
        answeredQuestions: 0,

    }

    correctAnswer = () => {
        this.setState((currentState) => ({
            answeredQuestions: currentState.answeredQuestions+1,
            score: currentState.score+1
        }))
    }

    incorrectAnswer = () => {
        this.setState((currentState) => ({
            answeredQuestions: currentState.answeredQuestions+1,
        }))
    }

    goBack = () => {
        this.props.navigation.goBack()
    }

    restart = () => {
        this.setState(() => ({
            score: 0,
            answeredQuestions: 0,
        }))
    }

    render() {
        const {deck, navigation} = this.props
        const {score, answeredQuestions} = this.state
        const keys = Object.keys(deck)
        const totalQuestions = keys.length
        
        if (totalQuestions < 1) {
            return (
                <View>
                    <Text style={styles.primaryText}>There are no cards in this deck collection</Text>
                </View>
            )
        }
        if (totalQuestions === answeredQuestions) {
            return (
                <Result 
                    score={score} 
                    totalQuestions={totalQuestions} 
                    goBack={this.goBack}
                    restart={this.restart}
                />
            )
        }
        return (
            <View style={styles.container}>
                <Text style={styles.progressText}>{answeredQuestions+1}/{totalQuestions}</Text>
                <View style={{flex:10}}>
                    <Card 
                        question={keys[answeredQuestions]}
                        answer={deck[keys[answeredQuestions]]}
                    />
                </View>
               
                <View style={{flex:10}}>
                    <TouchableOpacity style={styles.correctButton} onPress={this.correctAnswer}>
                        <Text style={styles.quizText}>Correct</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.incorrectButton} onPress={this.incorrectAnswer}>
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
    primaryText: {
        fontSize: 50,
        alignSelf: 'center',
        padding: 20 
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

function mapStateToProps(decks, {navigation}) {
    return {
        deck: decks[navigation.state.params.id],
        navigation
    }
}

export default connect(mapStateToProps)(Quiz)