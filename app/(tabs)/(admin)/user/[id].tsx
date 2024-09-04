import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

// user/id
export default function UserByID() {

    // รับค่าผ่าน URL ด้วย useLocalSearchParams()   
    const { id } = useLocalSearchParams()

    return (
        <View style={styles.container}>
            <Text style={{fontSize: 24}}>User ID: { id }</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})