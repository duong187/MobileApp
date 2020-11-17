import React from 'react'
import {View, Text, ActivityIndicator, StyleSheet, Button} from 'react-native'

export default class Loading extends React.Component{
    render({navigation}){
        return(
            <View style = {styles.container}>
                <Text>
                    Loading...
                </Text>
                <Button title="Go to Login" onPress={ () => navigation.navigate("Login") }/>
                <ActivityIndicator size='large' />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})