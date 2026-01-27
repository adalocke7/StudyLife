import { Tabs } from 'expo-router';
import IonIcons from '@expo/vector-icons/Ionicons'
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import SettingsModal from '../../components/SettingsModal';

export default function TabLayout() {
  const [modalVisible, setModalVisible] = useState(false);

  const SettingsIcon = () => (
    <TouchableOpacity onPress={() => setModalVisible(true)} style={{ marginRight: 15 }}>
      <IonIcons name="settings-outline" size={24} color="#fff" />
    </TouchableOpacity>
  );

  return (
    <>
      <Tabs screenOptions={{ 
        tabBarActiveTintColor: '#ECB176', 
        tabBarInactiveTintColor: '#fff',
        headerStyle: { backgroundColor: '#6F4E37' },
        headerShadowVisible: false,
        headerTintColor: '#FED8B1',
        tabBarStyle: { backgroundColor: '#A67B5B' },
        headerRight: SettingsIcon,
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

      <SettingsModal visible={modalVisible} onClose={() => setModalVisible(false)} />
    </>
  );
}
