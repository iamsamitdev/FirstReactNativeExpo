import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { useRouter, useLocalSearchParams } from 'expo-router'

export default function contact() {

    // สร้างตัวแปร router โดยใช้ฟังก์ชัน useRouter()
    const router = useRouter()

    // รับค่าผ่าน URL ด้วย useLocalSearchParams()
    const { name , company, email, tel } = useLocalSearchParams()

    // สร้างตัวแปร inputName, inputEmail, inputTel โดยใช้ useState()
    const [inputName, setInputName] = useState('')
    const [inputEmail, setInputEmail] = useState('')
    const [inputTel, setInputTel] = useState('')

    return (
        <View style={styles.container}>
            <Text style={{fontSize:24}}>Contact Page</Text>

            <Text style={{fontSize:24}}>Name: {name}</Text>
            <Text style={{fontSize:24}}>Company: {company}</Text>
            { email ? <Text style={{fontSize:24}}>Email: {email}</Text>: null}
            { tel ? <Text style={{fontSize:24}}>Tel: {tel}</Text>: null}

            <Text></Text>
            <Button
                title='Go to Home'
                onPress={() => router.back()}
            />

            <Text></Text>

            <Text>Name</Text>
            <TextInput
                keyboardType='default'
                defaultValue={inputName}
                onChange={e => setInputName(e.nativeEvent.text)}
                style={{ 
                    height: 40, 
                    borderColor: 'gray', 
                    borderWidth: 1,
                    width: 200, 
                    padding: 10,
                    margin: 10,
                    borderRadius: 5
                }}
                placeholder='Name'
            />
            <Text>{inputName}</Text>
            <Text>Email</Text>
            <TextInput
                keyboardType='email-address'
                defaultValue={inputEmail}
                onChange={e => setInputEmail(e.nativeEvent.text)}
                style={{ 
                    height: 40, 
                    borderColor: 'gray', 
                    borderWidth: 1,
                    width: 200, 
                    padding: 10,
                    margin: 10,
                    borderRadius: 5
                }}
                placeholder='Email'
            />
            <Text>{inputEmail}</Text>
            <Text>Tel</Text>
            <TextInput
                keyboardType='phone-pad'
                defaultValue={inputTel}
                onChange={e => setInputTel(e.nativeEvent.text)}
                style={{ 
                    height: 40, 
                    borderColor: 'gray', 
                    borderWidth: 1,
                    width: 200, 
                    padding: 10,
                    margin: 10,
                    borderRadius: 5
                }}
                placeholder='Tel'
            />
            <Text>{inputTel}</Text>
            <Text></Text>
            <Button
                title='Submit'
                onPress={() => {
                    console.log('Name:', inputName)
                    console.log('Email:', inputEmail)
                    console.log('Tel:', inputTel)
                }}
            />


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})