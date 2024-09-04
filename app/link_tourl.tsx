import { StyleSheet, Text, View, Linking, Alert, Button } from 'react-native'
import React from 'react'

export default function link_tourl() {

    const openLineApp = () => {
        // Open Line App
        // const url = 'line://ti/p/@itgenius'

        // Open Facebook App
        // const url = 'fb://page/itgenius.co.th'

        // Open Website
        // const url = 'https://www.itgenius.co.th'

        // Open Phone App
        // const url = 'tel:0812345678'

        // Open Email App
        // const url = 'mailto:samitkoyom@gmail.com'
        
        // Open YouTube App
        const url = 'vnd.youtube://www.youtube.com/watch?v=9bZkp7q19f0'

        Linking.openURL(url).catch(() => {
            Alert.alert('ไม่สามารถเปิดแอพไลน์ได้ กรุณาติดตั้งแอพไลน์ก่อน')
        })
    }

    return (
        <View style={styles.container}>
            <Button title='Open Line App' onPress={openLineApp} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})