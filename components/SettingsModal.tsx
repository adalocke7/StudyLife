import { useEffect } from 'react';
import { Modal, TouchableOpacity, View, Text } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

interface SettingsModalProps {
  visible: boolean;
  onClose: () => void;
}

export default function SettingsModal({ visible, onClose }: SettingsModalProps) {
  const translateY = useSharedValue(400);

  useEffect(() => {
    translateY.value = withTiming(visible ? 0 : 400, { duration: 300 });
  }, [visible, translateY]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

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