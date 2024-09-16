import React, { useEffect } from "react";
import { StyleSheet, View, Text, BackHandler } from "react-native";

export default function SecondScreen({route,navigation}) {
    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPRess',close)
        return() => {
            BackHandler.removeEventListener('hardwareBackPress',close)
        }
    }, [])
    close = () => {
        navigation.goBack(null)
        return true
    }
    
    return (
        <View style={styles.container}>
            <Text>Second screen</Text>
            <Text>{route.params?.message}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    }
});