import React, { Component } from 'react'
import {Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView} from 'react-native'
import {connect} from 'react-redux'
import {addCard} from '../actions'


class AddCard extends Component {

    static navigationOptions = ({navigation}) => {
        const {id} = navigation.state.params
        return {
            title: `Add a card to ${id}`,     
        }
    }

    state = {
        question: '',
        answer: ''
    }

    onQuestionChange = (text) => {
        this.setState(() => ({
            question: text
        }))
    }

    onAnswerChange = (text) => {
        this.setState(() => ({
            answer: text
        }))
    }

    onSubmit = () => {
        const card = {[this.state.question]: this.state.answer}
        this.props.dispatch(addCard(this.props.id,card))
        this.setState(() => ({
            question: '',
            answer: ''
        }))
        this.props.navigation.goBack()

    }

    render() {
        const {question, answer} = this.state
        return (
            <KeyboardAvoidingView behavior='height' style={styles.container}>
                <TextInput
                    style={styles.textInput}
                    value={question}
                    onChangeText={(text) => this.onQuestionChange(text)}
                    placeholder= 'Question'
                />
                <TextInput
                    style={styles.textInput}
                    value={answer}
                    onChangeText={(text) => this.onAnswerChange(text)}
                    placeholder= 'Answer'
                />
                <TouchableOpacity 
                    style={styles.submitButton}
                    onPress={this.onSubmit}
                    disabled={question === '' || answer === ''}
                >
                    <Text style={styles.secondryText}>Add Card</Text>
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
        padding: 10,
        margin: 20
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


function mapStateToProps(decks, {navigation}) {
    return {
        id: navigation.state.params.id,
        navigation
    }
}

export default connect(mapStateToProps)(AddCard)