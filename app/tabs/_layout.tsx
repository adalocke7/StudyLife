import { Tabs } from 'expo-router';
import IonIcons from '@expo/vector-icons/Ionicons'
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import SettingsModal from '../../components/SettingsModal';

export default function TabLayout() {
  //Initializes the variable constants
  const [modalVisible, setModalVisible] = useState(false);

  //This sets the settingIcon and its functionality
  const SettingsIcon = () => (
    <TouchableOpacity onPress={() => setModalVisible(true)} style={{ marginRight: 15 }}>
      <IonIcons name="settings-outline" size={24} color="#fff" />
    </TouchableOpacity>
  );

  return (
    <> 
      {/*This displays the settings icon in the header and the style */}
      <Tabs screenOptions={{ 
        tabBarActiveTintColor: '#ddbea9', 
        tabBarInactiveTintColor: '#fff',
        headerStyle: { backgroundColor: '#b7b7a4' },
        headerShadowVisible: false,
        headerTintColor: '#ffe8d6',
        tabBarStyle: { backgroundColor: '#6b705c' },
        headerRight: SettingsIcon,
      }}>
        {/*These renders the different tab options at the bottom of the page and the icons*/}
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
      {/*Closes the settings page when it closes*/}
      <SettingsModal visible={modalVisible} onClose={() => setModalVisible(false)} />
    </>
  );
}
