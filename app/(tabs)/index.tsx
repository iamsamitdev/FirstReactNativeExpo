// rnfs
import { Button, Text, View, ScrollView, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback, Alert, Modal } from 'react-native'
import React, { useState } from 'react'
import About from '@/components/About'
import MyStyle from '@/constants/Style'
import { useRouter, Link } from 'expo-router'

export default function index() {

  // สร้างตัวแปร router โดยใช้ฟังก์ชัน useRouter()
  const router = useRouter()

  // สร้างฟังก์ชันแสดง Alert
  const showAlert = () => {
    Alert.alert(
      'Alert Title', 
      'This is the content of the alert!',
      [
        {
          text: 'Cancel', // ฟังก์ชันที่ทำงานเมื่อกดปุ่ม Cancel
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        },
        {
          text: 'OK', // ฟังก์ชันที่ทำงานเมื่อกดปุ่ม OK
          onPress: () => console.log('OK Pressed')
        },
        {
          text: 'Yes', // ฟังก์ชันที่ทำงานเมื่อกดปุ่ม Yes
          onPress: () => console.log('Yes Pressed')
        },
      ],
      { cancelable: false } // ไม่สามารถปิด Alert ได้โดยการกดที่พื้นหลัง
    )
  }

  // สร้างตัวแปร state สำหรับซ่อนแสดง Modal
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <ScrollView>
      <View style={MyStyle.container}>
        
          <Text style={[MyStyle.text, {fontSize: 24, fontWeight: 'bold'}]}>Hello World!</Text>
          <Text style={MyStyle.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit</Text>

          <About />

          <Link href='/contact?name=Samit&company=ITGenius'>
            <Text style={MyStyle.text}>Go to Contact Page</Text>
          </Link>

          <Text></Text>

          <Button 
            title='Click to Contact with query string' 
            onPress={() => {
                router.push('/contact?name=Samit&company=ITGenius')
            }}  // ใช้ router.push() เพื่อนำทาง
            // router.push(path: string | object) เปลี่ยนหน้า และเก็บหน้าเก่าไว้จะสามารถกลับมาหน้าเดิมได้
            // router.replace(path: string | object)เปลี่ยนหน้าและลบหน้าเก่าทิ้งไป จะไม่สามารถกดปุ่ม Back กลับมาหน้าเดิมได้
            // router.back() คือการกลับหน้าก่อนหน้า เหมือนกับการกดปุ่ม "Back" ในเบราว์เซอร์
            // router.navigate(path: string | object) คล้ายกับ router.push() ไปยังหน้าใหม่โดยไม่ต้องการจัดการสแต็กเพิ่มเติม
            // router.reload() คือการโหลดหน้าเดิมใหม่
          />

          <Text></Text>

          <Button
            title='Go to Contact with Params'
            onPress={() => {
                router.push({
                    pathname: '/contact',
                    params: {
                        name: 'Samit',
                        email: 'samit@email.com',
                        tel: '0812345678',
                        company: 'ITGenius',
                    }
                })
            }}
          />

        <Text></Text>

        <Button
            title='Go to User ID: 123'
            onPress={() => {
                router.push('/user/123')
            }}
        />

        <Text></Text>

        <Button
            title='Go to Profile'
            onPress={() => {
                router.push('/user/profile')
            }}
        />

        <Text></Text>

        <Button
            title='Go to Not Found'
            onPress={() => {
                router.push('/notfoundxxx')
            }}
        />

        {/* TouchableOpacity */}
        <Text></Text>

        <TouchableOpacity
            activeOpacity={0.50}
            style={{
              backgroundColor: '#570faa', 
              padding: 10, 
              height: 60, 
              width: 200,
              justifyContent: 'center', 
              alignItems: 'center',
              borderRadius: 10
            }}
            onPress={() => {
              console.log('TouchableOpacity Clicked')
            }}
        >
            <Text style={{color: 'white', fontSize: 24}}>Send Data</Text>
        </TouchableOpacity>
       
        <Text></Text>

        <TouchableHighlight
          underlayColor='#570faa'
          style={{
            backgroundColor: '#d8ba0d', 
            padding: 10, 
            height: 60, 
            width: 200,
            justifyContent: 'center', 
            alignItems: 'center',
            borderRadius: 10
          }}
          onPress={() => {
            console.log('TouchableHighlight Clicked')
          }}
        >
            <Text style={{color: 'white', fontSize: 24}}>Send Data</Text>
        </TouchableHighlight>

        <Text></Text>

        <TouchableWithoutFeedback
          style={{
            backgroundColor: '#570faa', 
            padding: 10, 
            height: 60, 
            width: 200,
            justifyContent: 'center', 
            alignItems: 'center',
            borderRadius: 20
          }}
          onPress={() => {
            console.log('TouchableWithoutFeedback Clicked')
          }}
        >
          <Text style={{backgroundColor: '#570faa', padding: 10, color: 'white', fontSize: 16}}>Send Data asfasfas</Text>
        </TouchableWithoutFeedback>

        <Text></Text>

        <TouchableHighlight
          underlayColor='#aa4a0f'
          style={{
            backgroundColor: '#0d51d8', 
            padding: 10, 
            height: 40, 
            width: 200,
            justifyContent: 'center', 
            alignItems: 'center',
            borderRadius: 10
          }}
          onPress={() => {
            // console.log('TouchableHighlight Clicked')
            showAlert()
          }}
        >
            <Text style={{color: 'white', fontSize: 18}}>Show Alert</Text>
        </TouchableHighlight>

        <Text></Text>
        
        {/* Modal */}
        <Modal
          animationType='slide'
          transparent={true}
          visible={modalVisible}
          onShow={() => { console.log('Modal Show') }}
          onRequestClose={() => { console.log('Modal Close') }}
        >
          <View style={{
            flex: 1, 
            backgroundColor: 'rgba(0, 0, 0, 0.9)', // ทำให้พื้นหลังเป็นกึ่งโปร่งใส
            justifyContent: 'center', // จัดกลางในแนวตั้ง
            alignItems: 'center', // จัดกลางในแนวนอน
          }}>
            <View style={{
               width: 300, // กำหนดความกว้างของ Modal
               backgroundColor: '#fff', // สีพื้นหลังของ Modal
               borderRadius: 10, // มุมโค้งมนของ Modal
               padding: 20, // ระยะห่างภายใน
               alignItems: 'center', // จัดกลางในแนวนอนภายใน Modal
            }}>
              <Text style={{ marginBottom: 20 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. A hic, consectetur est possimus incidunt eum? Saepe dolores sequi nam amet tempore laboriosam quasi, quam sint unde maiores modi delectus dolor?</Text>
              <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: '100%' }}>
                <Button
                  title='Submit'
                  onPress={() => {
                    console.log('Submit Modal')
                  }}
                />
                <Button
                  title='X Close'
                  onPress={() => {
                    // console.log('Close Modal')
                    setModalVisible(false)
                  }}
                />
              </View>
            </View>
          </View>
        </Modal>

        <Button
          title='Show Modal'
          onPress={() => {
            // console.log('Show Modal')
            setModalVisible(true)
          }}
        />

      </View>
    </ScrollView>
  )
}