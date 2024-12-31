import {View, Text, StyleSheet} from 'react-native';
import { GlobalColors } from '../../constants/colors';

export default function ErrorOverlay({message, onConfirm}){
    return (<View style={styles.container}>
        <Text style={[styles.text, styles.title]}>Error Message</Text>
        <Text style={styles.text}>{message}</Text>
        <Button onPress={onConfirm}>Okay</Button>
    </View>);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: GlobalColors.colors.primary700,
    },
    text: {
        textAlign: 'center',
        color: 'white',
        marginBottom: 8,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
    }
}) 