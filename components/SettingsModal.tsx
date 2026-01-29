import { useEffect } from 'react';
import { Modal, TouchableOpacity, View, Text } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

//Defines the types for the settings modal component
interface SettingsModalProps {
  visible: boolean;
  onClose: () => void;
}

export default function SettingsModal({ visible, onClose }: SettingsModalProps) {

  //Initializes the animation value
  const translateY = useSharedValue(400);

  //Handles the animation effect when opened or closed
  useEffect(() => {
    translateY.value = withTiming(visible ? 0 : 400, { duration: 300 });
  }, [visible, translateY]);

  //Defines the animation style
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  //Renders the settings page
  return (
    <Modal transparent visible={visible} animationType="slide" onRequestClose={onClose}>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <TouchableOpacity style={{ flex: 1 }} onPress={onClose} />
        <Animated.View style={[{ width: 400, backgroundColor: '#ffe8d6', padding: 20 }, animatedStyle]}>
          <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: '#6b705c' }}>Settings</Text>
          {/* Add your settings options here */}
          <Text style={{ color: '#6b705c' }}>Option 1</Text>
          <Text style={{ color: '#6b705c' }}>Option 2</Text>
          <Text style={{ color: '#6b705c' }}>Option 3</Text>
        </Animated.View>
      </View>
    </Modal>
  );
}