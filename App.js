import React, { Component } from 'react'
import { StyleSheet, Platform, Image, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { createAppContainer, SwitchNavigator } from 'react-navigation'
// import the different screens
import Loading from './Loading'
import Login from './Login'
// create our app's navigation stack
const Stack = createStackNavigator();


class App extends Component {
  render() {
      return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Loading" component={Loading} />
            <Stack.Screen name="Login" component={Login} />
          </Stack.Navigator>
        </NavigationContainer>
      );
  }
}

export default App;