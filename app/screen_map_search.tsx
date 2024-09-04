import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MapView, { Marker, Region } from 'react-native-maps'
import * as Location from 'expo-location'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'

export default function screen_map_search() {

    const [location, setLocation] = useState<Location.LocationObject | null>(null) // ระบุชนิดข้อมูล
  const [searchLocation, setSearchLocation] = useState<Region | null>(null) // กำหนดชนิดข้อมูลเป็น Region

    const getLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync()
        if (status !== 'granted') {
            alert('Permission to access location was denied')
            return
        }

        let loc: any = await Location.getCurrentPositionAsync({})
        setLocation(loc)
    }

    useEffect(() => {
        getLocation()
    }, [])


    return (
        <View style={styles.container}>
            <GooglePlacesAutocomplete
                placeholder='พิมพ์สถานที่ที่ต้องการค้นหา'
                fetchDetails={true}
                onPress={(data, details = null) => {
                    // เมื่อผู้ใช้เลือกสถานที่
                    const { lat, lng }: any = details?.geometry.location
                    setSearchLocation({
                        latitude: lat,
                        longitude: lng,
                        latitudeDelta: 0.01,
                        longitudeDelta: 0.01,
                    })
                }}
                query={{
                    key: 'YOUR_GOOGLE_API_KEY', // ใส่ Google API Key ของคุณที่นี่
                    language: 'en',
                }}
                styles={{
                    container: { flex: 0, position: 'absolute', width: '100%', zIndex: 1 },
                    listView: { backgroundColor: 'white' },
                }}
            />

            {location ? (
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: location.coords.latitude,
                        longitude: location.coords.longitude,
                        latitudeDelta: 0.05,
                        longitudeDelta: 0.05,
                    }}
                    region={searchLocation || {
                        latitude: location.coords.latitude,
                        longitude: location.coords.longitude,
                        latitudeDelta: 0.05,
                        longitudeDelta: 0.05,
                    }}
                >
                    {/* Marker สำหรับตำแหน่งปัจจุบัน */}
                    <Marker
                        coordinate={{
                            latitude: location.coords.latitude,
                            longitude: location.coords.longitude,
                        }}
                        title={'My Location'}
                    />
                    {/* Marker สำหรับสถานที่ค้นหา */}
                    {searchLocation && (
                        <Marker
                            coordinate={searchLocation}
                            title={'Search Location'}
                            pinColor='blue'
                        />
                    )}
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