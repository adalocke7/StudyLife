import { useEffect } from 'react';
import { Modal, TouchableOpacity, View, Text } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

interface SettingsModalProps {
  visible: boolean;
  onClose: () => void;
}

export default function SettingsModal({ visible, onClose }: SettingsModalProps) {
  const translateX = useSharedValue(300);

  useEffect(() => {
    translateX.value = withTiming(visible ? 0 : 175, { duration: 300 });
  }, [visible, translateX]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  return (
    <Modal transparent visible={visible} animationType="fade" onRequestClose={onClose}>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <TouchableOpacity style={{ flex: 1 }} onPress={onClose} />
        <Animated.View style={[{ width: 175, backgroundColor: '#FED8B1', padding: 20 }, animatedStyle]}>
          <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: '#6F4E37' }}>Settings</Text>
          {/* Add your settings options here */}
          <Text style={{ color: '#6F4E37' }}>Option 1</Text>
          <Text style={{ color: '#6F4E37' }}>Option 2</Text>
          <Text style={{ color: '#6F4E37' }}>Option 3</Text>
        </Animated.View>
      </View>
    </Modal>
  );
}