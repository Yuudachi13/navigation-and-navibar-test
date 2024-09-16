import React, { useLayoutEffect, useState } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function HomeScreen({navigation}) {
    const [message, setMessage] = useState('Testing')

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Ionicons 
                name="arrow-forward"
                size={24} 
                onPress={()=> navigation.navigate('Second',{message: message})} />
            )
        })
    })

    return (
        <View style={styles.container}>
            <Text>Home screen</Text>
            <TextInput value={message} onChange={text => setMessage(text)} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    }
});