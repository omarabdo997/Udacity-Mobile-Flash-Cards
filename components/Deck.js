import React, {Component} from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'



export default class Deck extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.container} onPress={() => this.props.navigation.navigate('DeckDetail')}>
                <Text style={styles.primaryText}>Deck0</Text>
                <Text style={styles.secondaryText}>5 cards</Text>
            </TouchableOpacity>
        )
    }

}
const styles = StyleSheet.create({
    container: {
       alignItems : 'center',
       marginBottom: 50

       
    },
    primaryText: {
        fontSize: 85 
    },
    secondaryText: {
        fontSize: 30,
        color: 'grey'

    },
    
})
