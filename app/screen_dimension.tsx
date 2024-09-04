import { StyleSheet, Text, View, Dimensions, useWindowDimensions, Button } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function screen_dimension() {

    // รับขนาดหน้าจอ
    // const { width, height } = Dimensions.get('window')

    // สร้าง State สำหรับเก็บขนาดหน้าจอ
    const [screenSize, setScreenSize] = useState(Dimensions.get('window'))

    // ใช้ Hook ของ React ในการเรียกใช้ขนาดหน้าจอ
    const window = useWindowDimensions()

    // เช็คว่าเป็นแนวตั้งหรือแนวนอน
    const isPortrait = window.height > window.width

    // ฟังก์ชันสำหรับอัพเดทขนาดหน้าจอ
    useEffect(() => {
        // ฟังก์ชันที่ใช้ในการอัปเดตขนาดหน้าจอ
        const updateScreenSize = () => {
            setScreenSize(Dimensions.get('window'))
        }
        // เพิ่ม event listener สำหรับการเปลี่ยนแปลงขนาดหน้าจอ
        const subscription = Dimensions.addEventListener('change', updateScreenSize)

        // คืนค่าฟังก์ชันที่ใช้ในการลบ event listener
        return () => subscription.remove()
    }, [])


    return (
        <View style={styles.container}>
            <Text style={styles.text}>Screen width: { screenSize.width }</Text>
            <Text style={styles.text}>Screen height: { screenSize.height }</Text>
            <Text style={styles.text}>Window width: { window.width }</Text>
            <Text style={styles.text}>Window height: { window.height }</Text>
            <Text style={styles.text}>Orientation: { isPortrait ? 'Portrait' : 'Landscape' }</Text>
            { isPortrait ? <Button title="Sample" onPress={() => {}} />: null}
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