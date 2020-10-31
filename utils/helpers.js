import {AsyncStorage} from 'react-native'

export function getDecks() {
    return AsyncStorage.getItem('decks')
    .then((decks) => {
        return JSON.parse(decks)
    })
} 