import React, {Component} from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import {connect} from 'react-redux'


class DeckDetail extends Component {

    static navigationOptions = ({navigation}) => {
        const {id} = navigation.state.params
        return {
            title: id,
            
        }
    }

    render() {
        const {id, deck, navigation} = this.props
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.primaryText}>{id}</Text>
                    <Text style={styles.secondaryText}>{Object.keys(deck).length} cards</Text>
                </View>
                <View>
                    <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('AddCard', {id})}>
                        <Text style={styles.addText}>Add Card</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.quizButton} onPress={() => navigation.navigate('Quiz', {id})}>
                        <Text style={styles.quizText}>Start Quiz</Text>
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
        fontSize: 85,
        alignSelf: 'center' 
    },
    secondaryText: {
        fontSize: 30,
        color: 'grey',
        alignSelf: 'center'

    },
    quizText: {
        fontSize: 30,
        color: 'white'
    },
    quizButton: {
        borderWidth: 1,
        padding: 25,
        marginTop: 'auto',
        marginBottom: 100,
        backgroundColor: 'black',
        borderRadius: 10
    },
    addText: {
        fontSize: 30,
        color: 'black'
    },
    addButton: {
        marginTop: 'auto',
        borderWidth: 1,
        padding: 25,
        marginTop: 'auto',
        marginBottom: 100,
        backgroundColor: 'white',
        borderRadius: 10
    }
})

function mapStateToProps(decks, {navigation}) {
    return {
        deck: decks[navigation.state.params.id],
        navigation,
        id: navigation.state.params.id
    }
}

export default connect (mapStateToProps)(DeckDetail)