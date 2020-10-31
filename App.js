import React, {Component} from 'react';
import { StyleSheet, View, StatusBar, AsyncStorage} from 'react-native';
import { purple} from './utils/colors'
import Navigator from './components/StackNavigator'
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import decks from './reducers'
import thunk from 'redux-thunk'
import {setNotification} from './utils/helpers'


const store = createStore(decks,applyMiddleware(thunk))

store.subscribe(() => {
  AsyncStorage.setItem('decks', JSON.stringify(store.getState()))
})

export default class App extends Component {
  componentDidMount() {
    setNotification()
  }
  render() {
    return (
        <Provider store={store}>
          <View style={styles.container}>
            <StatusBar backgroundColor={purple} barStyle='light-content'/>
            <Navigator />
          </View>
        </Provider>

      
    )
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
