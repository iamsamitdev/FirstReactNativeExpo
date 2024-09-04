import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import NetInfo from '@react-native-community/netinfo'

export default function check_network() {

    // เก็บสถานะของเครือข่าย
    const [isConnected, setIsConnected] = useState<boolean>(false)

    // ชนิดการเชื่อมต่อของเครือข่าย
    // NetInfoStateType มีค่าได้แก่ unknown, none, wifi, cellular, bluetooth และ ethernet
    const [type, setType] = useState<string>('unknown')

    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener(state => {
            // ตรวจสอบสถานะของเครือข่าย
            setIsConnected(state.isConnected ?? false)
            // ตรวจสอบชนิดการเชื่อมต่อของเครือข่าย
            setType(state.type ?? 'unknown')
        })

        return () => unsubscribe()
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {isConnected ? 'Connected to Internet' : 'No Internet Connection'}
            </Text>
            <Text style={styles.text}>
                {type}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
    },
})