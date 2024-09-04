// app/(admin)/_layout.tsx
import { Stack } from 'expo-router'

export default function AdminLayout() {
  return (
    <Stack screenOptions={{headerTitleAlign: 'center', headerStyle: {backgroundColor: '#1e57f4'}, headerTintColor: '#fff', }}>
      {/* เส้นทางย่อยสำหรับ admin */}
      <Stack.Screen name="user/profile" options={{ title: 'User Profile' }} />
      <Stack.Screen name="user/[id]" options={{ title: 'User Details' }} />
    </Stack>
  )
}
