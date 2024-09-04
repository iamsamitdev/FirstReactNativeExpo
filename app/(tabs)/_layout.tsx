import { Tabs } from 'expo-router'
import { TabBarIcon } from '@/components/navigation/TabBarIcon'

export default function TabLayout(){
    return (
        <Tabs screenOptions={{
                headerTitleAlign: 'center', 
                headerStyle: {backgroundColor: '#1e57f4'}, 
                headerTintColor: '#fff', 
                tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold', color: '#fff' },
                tabBarStyle: { backgroundColor: '#1e57f4'},
                tabBarActiveTintColor: '#fff',
                tabBarInactiveTintColor: '#ccc',
        }}>
            <Tabs.Screen name='index' options={{
                title: 'Home',
                tabBarIcon: ({ color, focused}) => (
                    <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
                )
            }} />
            <Tabs.Screen name='contact' options={{ 
                title: 'Contact',
                tabBarIcon: ({ color, focused }) => (
                    <TabBarIcon name={focused ? 'call' : 'call-outline'} color={color} />
                )
            }} />
            <Tabs.Screen name='(admin)' options={{ 
                title: 'Admin', 
                headerShown: false ,
                tabBarIcon: ({ color, focused }) => (
                    <TabBarIcon name={focused ? 'person' : 'person-outline'} color={color} />
                )
            }} />
        </Tabs>
    )
}