import {View, Text, StyleSheet, Pressable} from 'react-native';
import { GlobalColors } from '../../constants/colors';

function Button({onPress, children, style, mode}){
    return (
        <View style={style}>
            <Pressable onPress={onPress} style={({pressed}) => {pressed && styles.pressed}}>
                <View style={[styles.button, mode === 'flat' && styles.flat]}>
                    <Text style={[styles.textButton, mode === 'flat' && styles.flatText]}>{children}</Text>
                </View>
            </Pressable>
        </View>
    );
}
export default Button;

const styles = StyleSheet.create({
    button: {
        borderRadius: 4,
        padding: 8,
        backgroundColor: GlobalColors.colors.primary500,
    },
    textButton:{
        textAlign: 'center',
        color: 'white',
    },
    pressed:{
        opacity: 0.75,
        backgroundColor: GlobalColors.colors.primary100,
        borderRadius: 4,
    },
    flatText:{
        color: GlobalColors.colors.primary200,
    },
    flat: {
        backgroundColor: 'transparent',
    }
})