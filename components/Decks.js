import React, {Component} from 'react'
import {View, Text, TouchableOpacity, StyleSheet, ScrollView} from 'react-native'
import Deck from './Deck'
import {handleRecieveDecks} from '../actions'
import {connect} from 'react-redux'


class Decks extends Component {

    componentDidMount() {
        this.props.dispatch(handleRecieveDecks())
    }

    render (){
        const {decks, navigation} = this.props
        return (
            <ScrollView style={styles.container}>
              {Object.keys(decks).map(key => (
                  <Deck key={key} id={key} navigation={navigation}></Deck>
              ))}  
            </ScrollView>
        )
    } 
}

const styles = StyleSheet.create({
    container: {
        paddingBottom: 20
    }
})

function mapStateToProps(decks) {
    return {
        decks
    }
}

export default connect(mapStateToProps)(Decks)


