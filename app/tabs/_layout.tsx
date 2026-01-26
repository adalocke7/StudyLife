import { Tabs } from 'expo-router';
import IonIcons from '@expo/vector-icons/Ionicons'

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ 
      tabBarActiveTintColor: '#ffd33d', headerStyle: { backgroundColor:
        '#25292e',
      },
      headerShadowVisible: false,
      headerTintColor: '#fff',
      tabBarStyle: { backgroundColor: '#25292e'},
    }}>

      <Tabs.Screen name="index" options={{ 
        title: 'Home', tabBarIcon: ({color, focused}) => (<IonIcons 
        name={focused? 'home-sharp' : 'home-outline'} color={color} size={24} />),
       }}/>

      <Tabs.Screen name="cafes" options={{ 
        title: 'Cafes', tabBarIcon: ({ color, focused}) => (<IonIcons
        name={focused ? 'cafe-sharp' : 'cafe-outline'} 
        color={color} size={24} />),
       }}/>

       <Tabs.Screen name="profile" options={{ 
        title: 'Profile', tabBarIcon: ({ color, focused}) => (<IonIcons
        name={focused ? 'menu-sharp' : 'menu-outline'} 
        color={color} size={24} />),
       }}/>
       
    </Tabs>
  );
}
