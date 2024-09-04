import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Drawer } from 'expo-router/drawer'

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
     <Drawer
        initialRouteName='(tabs)'
        screenOptions={{
          drawerLabelStyle: { color: '#e4f29e', fontSize: 16, fontWeight: 'bold' },
          drawerActiveBackgroundColor: '#da6f17ff',
          drawerActiveTintColor: '#e4f29e',
          drawerStyle: { backgroundColor: '#179fdaff', width: 250 },
        }}
      >
          <Drawer.Screen name='(tabs)' options={{ drawerLabel: 'Home', title: 'Home',}}/>
          <Drawer.Screen name='+not-found' options={{ drawerLabel: 'Notfound', title: 'Not Found',}}/>
          <Drawer.Screen name='screen_dimension' options={{ drawerLabel: 'Screen Dimension', title: 'Screen Dimension',}}/>
          <Drawer.Screen name='check_network' options={{ drawerLabel: 'Screen Network', title: 'Screen Network',}}/>
          <Drawer.Screen name='link_tourl' options={{ drawerLabel: 'Screen Link', title: 'Screen Link',}}/>
          <Drawer.Screen name='screen_map' options={{ drawerLabel: 'Screen Map', title: 'Screen Map',}}/>
          <Drawer.Screen name='screen_map_search' options={{ drawerLabel: 'Screen Map Search', title: 'Screen Map Search',}}/>
          <Drawer.Screen name='screen_async_storage' options={{ drawerLabel: 'Screen Storage', title: 'Screen Storage',}}/>
      </Drawer>
    </GestureHandlerRootView>
  )
}