import { Pressable, StyleSheet, Text } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

//Defines the types for the icon button component
type Props = {
    icon: keyof typeof MaterialIcons.glyphMap;
    label: string;
    onPress: () => void;
};

//Renders the icon button
export default function IconButton({ icon, label, onPress}: Props) {
    return (
        <Pressable style={styles.iconButton} onPress={onPress}>
            <MaterialIcons name={icon} size={24} color={'#6b705c'}/>
            <Text style={styles.iconButtonLabel}>{label}</Text>
        </Pressable>
    );
}

//Stylesheet
const styles = StyleSheet.create({
    iconButton: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconButtonLabel: {
        color: '#6b705c',
        marginTop: 12,
    },
});