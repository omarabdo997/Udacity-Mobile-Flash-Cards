import {ADD_CARD, ADD_DECK, RECIEVE_DECKS} from '../actions'


export default function decks (state={}, action) {
    switch (action.type) {
        case RECIEVE_DECKS:
            return {
                ...state,
                ...action.decks
            }          
        case ADD_DECK:
            return {
                ...state,
                ...action.deck
            }
        case ADD_CARD:
            return {
                ...state,
                [action.deck]: {
                    ...state[action.deck],
                    ...action.card
                }
            }       
        default:
            return state        
    }
}