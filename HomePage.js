import React, { Component } from 'react';
import { View, Text, Image, StyleSheet,KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ScrollView } from 'react-native-gesture-handler';

class HomePage extends React.Component{
  render(){
    <View>
        <View style = { styles.container }>
            <TouchableOpacity style={styles.button} onPress={()=>{alert("You clicked me")}}>
                <Image source = {require('./assets/messenger.png')} />
            </TouchableOpacity>
        </View>
        <ScrollView>
        </ScrollView>
        <View>
        </View>
    </View>
  }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
        height: 100
    },
    button: {
        backgroundColor: '#859a9b',
        borderRadius: 20,
        padding: 10,
        marginBottom: 20,
        shadowColor: '#303838',
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 10,
        shadowOpacity: 0.35,
    }
})