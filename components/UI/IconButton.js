import { Ionicons } from "@expo/vector-icons";
import { View, Pressable, StyleSheet } from "react-native";

function IconButton({size, color, icon, onPress}){
    return (
        <Pressable onPress={onPress} style={({pressed}) => pressed && styles.pressed}>
            <View style={styles.iconButtonContainer}>
                <Ionicons name={icon} size={size} color={color}/>
            </View>
        </Pressable>
    )
}

export default IconButton;

const styles = StyleSheet.create({
    pressed:{
        opacity: 0.75,
    },

    iconButtonContainer:{
        borderRadius: 24,
        marginHorizontal: 8,
        marginVertical: 2,
        padding: 6
    }
})