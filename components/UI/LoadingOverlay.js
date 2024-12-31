import { View, ActivityIndicator, StyleSheet } from "react-native";
import { GlobalColors } from "../../constants/colors";

function LoadingOverlay (){
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="white"/>
        </View>
    );
} 

export default LoadingOverlay;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalColors.colors.primary700,
        justifyContent: 'center',
        alignItems: 'center'
    }
})