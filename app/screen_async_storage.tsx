import { Button, StyleSheet, TextInput, View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function screen_async_storage() {

    const [input, setInput] = useState('')
    const [storedValue, setStoredValue] = useState('')

    // ฟังก์ชันบันทึกข้อมูลลงใน AsyncStorage
    const saveData = async () => {
        try {
            await AsyncStorage.setItem('myKey', input)
        } catch (e) {
            console.log(e)
        }
    }

    // ฟังก์ชันดึงข้อมูลจาก AsyncStorage
    const loadData = async () => {
        try {
            const value = await AsyncStorage.getItem('myKey')
            if (value !== null) {
                setStoredValue(value)
            }
        } catch (e) {
            console.log(e)
        }
    }

    // เริ่มต้นดึงข้อมูลจาก AsyncStorage
    useEffect(() => {
        loadData()
    }, [])

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                value={input}
                placeholder="Enter something..."
                onChangeText={(text) => setInput(text)}
            />
            <Button title="Save" onPress={saveData} />
            <Text></Text>
            <Text>Store Value: {storedValue}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 20,
        width: '100%',
    },
})