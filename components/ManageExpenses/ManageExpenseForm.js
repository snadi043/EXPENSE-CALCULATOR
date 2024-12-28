import {View, StyleSheet, Text} from 'react-native';
import ManageInput from './ManageInput';

function ManageExpenseForm(){
    function amountChangeHandler(){

    }

    return (
        <View style={styles.formContainer}>
            <Text style={styles.textTitle}>Manage Your Expenses</Text>
            <View style={styles.rowContainer}>
                <ManageInput label="Amount"
                    style={styles.input}
                        textInputConfig={{
                            KeyboardType: 'decimal-pad',
                            onChangeText: amountChangeHandler,
                        }}
                    />
                    <ManageInput label="Date"
                        style={styles.input}
                        textInputConfig={{
                            KeyboardType: 'default',
                            maxLength: 10,
                            placeholder: 'YYYY-DD-MM',
                            onChangeText: () => {}
                        }
                        }
                    />
            </View>
            
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
    formContainer:{
        marginTop: 40,
    },
    textTitle:{
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginVertical: 24,
    },
    rowContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    input:{
        flex: 1,
    }
});