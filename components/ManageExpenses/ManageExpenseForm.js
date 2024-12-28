import {View,StyleSheet} from 'react-native';
import ManageInput from './ManageInput';

function ManageExpenseForm(){
    function amountChangeHandler(){

    }

    return (
        <View>
            <ManageInput label="Amount"
                textInputConfig={{
                    KeyboardType: 'decimal-pad',
                    onChangeText: amountChangeHandler,
                }}
            />
            <ManageInput label="Date"
                textInputConfig={{
                    KeyboardType: 'default',
                    maxLength: 10,
                    placeholder: 'YYYY-DD-MM',
                    onChangeText: () => {}
                }
                }
            />
            <ManageInput label="Description"
                textInputConfig={{
                    multiline: true,
                    onChangeText: () => {}
                }}
            />
        </View>
    )
}

export default ManageExpenseForm;

const styles = StyleSheet.create({

});