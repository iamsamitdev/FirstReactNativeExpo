import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Location from 'expo-location'
import MapView, { Marker } from 'react-native-maps'

export default function screen_map() {

    // สร้างตัวแปรเก็บตำแหน่ง
    const [location, setLocation] = useState<any>(null)

    // กำหนดข้อมูล marker มากกว่า 1 จุด
    const [markers, setMarkers] = useState([
        {
            id: 1,
            title: 'ไอทีจีเนียส สำนักงานใหญ่',
            description: 'This is marker 1',
            latitude: 13.8270835,
            longitude: 100.5899024,
        },
        {
            id: 2,
            title: 'แม็คโคร ฟู้ดเซอร์วิส วังหิน',
            description: 'This is marker 2',
            latitude: 13.8240075,
            longitude: 100.5901799,
        },
        {
            id: 3,
            title: 'วัดสิริกมลาวาส (วัดใหม่เสนานิคม)',
            description: 'This is marker 3',
            latitude: 13.8227744,
            longitude: 100.5897836,
        },
    ])

    // สร้างฟังก์ชันเพื่อดึงตำแหน่งปัจจุบัน
    const getLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync()

        // ถ้าไม่ให้สิทธิ์ในการเข้าถึงตำแหน่ง
        if (status !== 'granted') {
            console.log('Permission to access location was denied')
            return
        }

        let location = await Location.getCurrentPositionAsync({})
        setLocation(location)
    }

    useEffect(() => {
        getLocation()
    }, [])

    return (
        <View style={styles.container}>
            {location ? (
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: location.coords.latitude,
                        longitude: location.coords.longitude,
                        //latitudeDelta: 0.0922,// 10 km in vertical
                        //longitudeDelta: 0.0421, // 5 km in horizontal
                        latitudeDelta: 0.01, // ซูมใกล้ขึ้น
                        longitudeDelta: 0.01, // ซูมใกล้ขึ้น
                    }}
                >
                    {
                        markers.map((marker, index) => (
                            <Marker
                                key={index}
                                coordinate={{
                                    latitude: marker.latitude,
                                    longitude: marker.longitude,
                                }}
                                title={marker.title}
                                description={marker.description}
                            />
                        ))
                    }
                </MapView>
            ) : (
                <Text>Loading...</Text>

            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    },
})