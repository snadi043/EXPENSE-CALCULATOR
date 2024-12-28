import { useState } from 'react';
import {View, StyleSheet, Text} from 'react-native';
import ManageInput from './ManageInput';
import Button from '../UI/Button';
import { getFormattedDate } from '../../utilities/date';

function ManageExpenseForm({onCancel, submitHandlerLabel, onSubmit, defaultInputValues}){

     //using the useState() hook to manage the form wide state with the generic procedure and  
     // setting an object with empty strings as an initial state values to all the values which are expected to handle later.
        const [inputValues, setInputValues] = useState({
            amount: defaultInputValues ? defaultInputValues.amount.toString() : '',
            date: defaultInputValues ? getFormattedDate(defaultInputValues.date) : '',
            description: defaultInputValues ? defaultInputValues.description : '',
        });
    
        //configuring single function to manage all the state changes by identifying the required state modifications.
        //enteredValues is the parameter which is provided by the react on the input elements.
        function inputValuesChangeHandler(inputIdentifier, enteredValues){
            // In this changeHandler function we manage the state using the setState() 
            // function which is done immutably based on the previous state. 
            setInputValues((currentInputValue) => {
                return {
                    ...currentInputValue,
                    [inputIdentifier]: enteredValues,
            }
        }
        );
        }

        function submitHandler(){
            const expenseData = {
             amount: +inputValues.amount,
             date: new Date(inputValues.date),
             description: inputValues.description
            };
            onSubmit(expenseData);
         }
    return (
        <View style={styles.formContainer}>
            <Text style={styles.textTitle}>Manage Your Expenses</Text>
            <View style={styles.rowContainer}>
                <ManageInput label="Amount"
                    style={styles.input}
                        textInputConfig={{
                            KeyboardType: 'decimal-pad',
                            // using the bind() method to handle the future changes when the amount input filed is changed.
                            onChangeText: inputValuesChangeHandler.bind(this, 'amount'),
                            value: inputValues.amount,
                        }}
                    />
                    <ManageInput label="Date"
                        style={styles.input}
                        textInputConfig={{
                            KeyboardType: 'default',
                            maxLength: 10,
                            placeholder: 'YYYY-DD-MM',
                            // using the bind() method to handle the future changes when the date input filed is changed.
                            onChangeText: inputValuesChangeHandler.bind(this, 'date'),
                            value: inputValues.date
                        }
                        }
                    />
            </View>
            
            <ManageInput label="Description"
                textInputConfig={{
                    multiline: true,
                    // using the bind() method to handle the future changes when the description input filed is changed.
                    onChangeText: inputValuesChangeHandler.bind(this, 'description'),
                    value: inputValues.description
                }}
            />
            <View style={styles.buttonsContainer}>
                <Button style={styles.button} mode="flat" onPress={onCancel}>Cancel</Button>
                <Button style={styles.button} onPress={submitHandler}>{submitHandlerLabel}</Button>
            </View>
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
    },
    buttonsContainer:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button:{
        marginHorizontal: 8,
        minWidth: 120,
    }
});