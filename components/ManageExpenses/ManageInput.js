import {View, TextInput, Text, StyleSheet} from 'react-native';

function ManageInput({label, textInputConfig}){
    return (
        <View>
            <Text>{label}</Text>
            <TextInput {...textInputConfig}/>
        </View>
    )
}

export default ManageInput;

const styles=StyleSheet.create({

});