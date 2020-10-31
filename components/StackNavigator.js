import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import DeckDetail from './DeckDetail'
import TabNavigator from './TabNavigator'
import AddCard from './AddCard'
import Quiz from './Quiz'


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
    },
    Quiz: {
        screen: Quiz,
    },
    
  });
  
export default createAppContainer(StackNavigator);