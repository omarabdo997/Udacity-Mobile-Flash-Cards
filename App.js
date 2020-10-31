import React, {Component} from 'react';
import { StyleSheet, Text, View, StatusBar  } from 'react-native';
import { purple, darkPurple } from './utils/colors'
import Navigator from './components/StackNavigator'










export default class App extends Component {
  render() {
    return (

        <View style={styles.container}>
          <StatusBar backgroundColor={purple} barStyle='light-content'/>
          <Navigator />
          
        </View>

      
    )
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
