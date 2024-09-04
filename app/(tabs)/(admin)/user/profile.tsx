import { FlatList, Image, ScrollView, StyleSheet, Switch, Text, View } from 'react-native'
import React, { useState } from 'react'

export default function profile() {

  // สร้าง state สำหรับเก็บค่าของ Switch
  const [switchBluetooth, setSwitchBluetooth] = useState(false)

  // FlatList Data
  const data = [
    { id: 1, name: 'JavaScript', price: 120 },
    { id: 2, name: 'React Native', price: 200 },
    { id: 3, name: 'React JS', price: 150 },
    { id: 4, name: 'Node JS', price: 180 },
    { id: 5, name: 'MongoDB', price: 100 },
    { id: 6, name: 'Express JS', price: 160 },
    { id: 7, name: 'Angular', price: 220 },
    { id: 8, name: 'Vue JS', price: 190 },
    { id: 9, name: 'TypeScript', price: 210 },
    { id: 10, name: 'PHP', price: 130 },
  ]

  // Flatlist Item
  const ListItem = (data: any) => {
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10}}>
        <Text>{data.id}</Text>
        <Text>{data.name}</Text>
        <Text>{data.price}</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center' }}>
        <Image
          source={require('@/assets/samitkk.jpg')}
          resizeMode='cover'
          style={{ width: 100, height: 100, borderRadius: 50 }}
        />
        <Text>Samit Koyom</Text>
        <Image
          source={{ uri: 'https://www.itgenius.co.th/assets/frondend/images/picturecourse/advanced-angular-7r2rid2a.jpg' }}
          resizeMode='cover'
          style={{ width: 400, height: 200 }}
        />
      </View>

      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <Text>Bluetooth</Text>
        <Switch
          value={switchBluetooth}
          onChange={
            e => {
              setSwitchBluetooth(e.nativeEvent.value)
              console.log(switchBluetooth)
            }
          }
        //  onValueChange={v => console.log(v)}
        />
      </View>
      <Text>Bluetooth is {switchBluetooth ? 'ON' : 'OFF'}</Text>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 20 }}>Course List</Text>
      <FlatList
        data={data}
        renderItem={({ item, index }) => ListItem(item)}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={{ marginTop: 10, paddingBottom: 30, marginLeft: 0 }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
  },
})