import React, {Component} from 'react'
import {View, Text, TouchableOpacity, StyleSheet, ScrollView} from 'react-native'
import Deck from './Deck'



export default class Decks extends Component {
    render (){
        return (
            <ScrollView style={styles.container}>
              <Deck navigation={this.props.navigation}/>
              
            </ScrollView>
        )
    }
    
}

const styles = StyleSheet.create({
    container: {
        paddingBottom: 20
    }
})


