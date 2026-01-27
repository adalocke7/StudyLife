import { Text, View, StyleSheet} from 'react-native';
import { Link } from 'expo-router';

export default function ProfileScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Profile screen</Text>
            <Link href="/tabs" style={styles.button}>
                Go to Home screen
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FED8B1',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#6F4E37'
    },
    button: {
        fontSize: 20,
        textDecorationLine: 'underline',
        color: '#6F4E37',
    },
});