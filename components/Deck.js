import React, {Component} from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import {connect} from 'react-redux'


class Deck extends Component {
    
    render() {
        const {deck, id, navigation} = this.props
        return (
            <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('DeckDetail',
            {id})}>
                <Text style={styles.primaryText}>{id}</Text>
                <Text style={styles.secondaryText}>{Object.keys(deck).length} cards</Text>
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

function mapStateToProps(decks, {id, navigation}) {
    return {
        deck: decks[id],
        id,
        navigation
    }
}

export default connect(mapStateToProps)(Deck)
