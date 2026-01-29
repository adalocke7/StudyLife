import { StyleSheet, View, Pressable, Text } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome'

//Defines the types for the button component
type Props = { label: string; theme?: 'primary'; onPress?: () => void; };

export default function Button({ label, theme, onPress}: Props) {

    //Primary Themed Button
     if (theme === 'primary') {
        return (
            <View
                style={[styles.buttonContainer,{ borderWidth: 4, borderColor: '#ddbea9', borderRadius: 18 },]}>
                <Pressable
                style={[styles.button, { backgroundColor: '#ffe8d6' }]} onPress={onPress}>
                <FontAwesome name="picture-o" size={18} color="#6b705c" style={styles.buttonIcon} />
                <Text style={[styles.buttonLabel, { color: '#6b705c' }]}>{label}</Text>
                </Pressable>
            </View>
            );
        }

    //Default button 
    return (
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={onPress}>
                <Text style={styles.buttonLabel}>{label}</Text>
            </Pressable>
        </View>
    );
}

//Stylsheet
const styles = StyleSheet.create({
    buttonContainer: {
        width: 320,
        height: 68,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
    },
    button: {
        borderRadius: 10,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: '#b7b7a4',
    },
    buttonLabel: {
        color: '#ffe8d6',
        fontSize: 16,
    },
    buttonIcon: {
        paddingRight: 8,
    },
});