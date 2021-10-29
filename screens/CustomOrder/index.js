import React from 'react'
import { View, Text, Button } from 'react-native'

export default function CustomOrder(props){

    const pressHandler = () => {
        props.navigation.goBack();
      }

    return(
        <View>
            <Text>hehe</Text>
            <Button title = 'Go Back' onPress={pressHandler}/>
        </View>
    );
}
