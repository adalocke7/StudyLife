import { ImageSourcePropType, StyleSheet } from "react-native";
import { Image } from "expo-image";

//Defines the types for the image viewer component
type Props = { imgSource: ImageSourcePropType; selectedImage?: string;};

//Renders the image viewer component
export default function ImageViewer({ imgSource, selectedImage}: Props) {
    const imagesSource = selectedImage ? { uri: selectedImage } : imgSource;

    return <Image source={imagesSource} style={styles.image} />
}

//Stylesheet
const styles = StyleSheet.create({
    image: {
        width: 320,
        height: 440,
        borderRadius: 18,
    },
})