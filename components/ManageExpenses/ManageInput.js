import {View, TextInput, Text, StyleSheet} from 'react-native';
import {GlobalColors} from '../../constants/colors';

function ManageInput({label, textInputConfig, style, invalid}){

    const inputStyles = [styles.textInput];

    if(textInputConfig && textInputConfig.multiline){
        inputStyles.push(styles.multiline);
    }

    if(invalid){
        inputStyles.push(styles.inValidInput);
    }

    return (
        <View style={[styles.inputContainer, style]}>
            <Text style={[styles.label, invalid && styles.inValidLabel]}>{label}</Text>
            <TextInput style={inputStyles} {...textInputConfig}/>
        </View>
    )
}

export default ManageInput;

const styles=StyleSheet.create({
    inputContainer:{
        marginHorizontal: 4,
        marginVertical: 8,
    },
    label:{
        fontSize: 12,
        color: GlobalColors.colors.primary100,
        marginBottom: 6,
    },
    textInput:{
        borderRadius: 6,
        backgroundColor: GlobalColors.colors.primary100,
        fontSize: 18,
        color: 'white',
        padding: 8,
        fontWeight: 600
    },
    multiline:{
        minHeight: 120,
        textAlignVertical: 'top',
    },
    inValidLabel:{
        color: GlobalColors.colors.error500,
    },
    inValidInput:{
        backgroundColor: GlobalColors.colors.error50,
    }
});