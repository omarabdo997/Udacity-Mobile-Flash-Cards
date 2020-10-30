import React, {Component} from 'react';
import { StyleSheet, Text, View, StatusBar  } from 'react-native';
import { purple } from './utils/colors'
import { createAppContainer } from 'react-navigation'
import { createMaterialTopTabNavigator} from "react-navigation-tabs";

function Home() {
  return (
    <View>
      <Text>Home</Text>
    </View>
  )
}
function Settings() {
  return (
    <View>
      <Text>Home</Text>
    </View>
  )
}

const Tabs = createAppContainer(createMaterialTopTabNavigator({
  Home: {
    screen: Home,
    title: "Home"
  },
  Settings: {
    screen: Settings,
    title: "Settings"
  }
}));






export default class App extends Component {
  render() {
    return (

        <View style={styles.container}>
          <StatusBar backgroundColor={purple} barStyle='light-content'/>
          <Tabs />
          
        </View>

      
    )
    
  }
}
// export default createAppContainer(App)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
