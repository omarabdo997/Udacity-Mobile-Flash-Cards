import { createAppContainer } from 'react-navigation'
import { createMaterialTopTabNavigator} from "react-navigation-tabs";
import AddDeck from './AddDeck'
import Decks from './Decks'
import {purple, darkPurple} from '../utils/colors'


const TabNavigator = createMaterialTopTabNavigator({
    Decks: {
      screen: Decks,
      navigationOptions: {
        tabBarLabel: 'Decks'
      }
    },
    AddDecks: {
      screen: AddDeck,
      navigationOptions: {
        tabBarLabel: 'Add Deck'
      }
    }
  }, {
    tabBarOptions: {
      style: {
        backgroundColor: purple
      },
      indicatorStyle: {
        backgroundColor: darkPurple
      },
      upperCaseLabel: true
  }});

export default createAppContainer(TabNavigator) 