export const ADD_DECK = 'ADD_DECK'
export const ADD_CARD = 'ADD_CARD'
export const RECIEVE_DECKS = 'RECIEVE_DECKS'
import {getDecks} from '../utils/helpers'


export function addDeck(deck) {
    return {
        type: ADD_DECK,
        deck
    }
}

export function addCard(deck, card) {
    return {
        type: ADD_CARD,
        deck,
        card
    }
}

function recieveDecks(decks) {
    return {
        type: RECIEVE_DECKS,
        decks
    }
}

export function handleRecieveDecks () {
    return (dispatch) => {
        getDecks()
            .then((decks) => {
                dispatch(recieveDecks(decks))
            })
    }
}

