import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import DeckDetail from './DeckDetail'
import TabNavigator from './TabNavigator'
import AddCard from './AddCard'
import Quiz from './Quiz'
import Result from './Result'


const StackNavigator = createStackNavigator({
    Home: {
      screen: TabNavigator,
      navigationOptions: {
          headerShown: false
      }
    },
    
    AddCard: {
        screen: AddCard
    },
    DeckDetail: {
        screen: DeckDetail,
        navigationOptions: {
            title: 'Deck Detail'
        }
    },
    Quiz: {
        screen: Quiz,
    },
    Result: {
        screen: Result,
    },
    
  });
  
export default createAppContainer(StackNavigator);