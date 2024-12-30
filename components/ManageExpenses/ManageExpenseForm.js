import { useState } from 'react';
import {View, StyleSheet, Text} from 'react-native';
import ManageInput from './ManageInput';
import Button from '../UI/Button';
import { getFormattedDate } from '../../utilities/date';
import { GlobalColors } from '../../constants/colors';

function ManageExpenseForm({onCancel, submitHandlerLabel, onSubmit, defaultInputValues}){

     //using the useState() hook to manage the form wide state with the generic procedure and  
     // setting an object with empty strings as an initial state values to all the values which are expected to handle later.
        const [inputs, setInputs] = useState({
            
            //In the State instead of passing the initial empty string we can also pass an object,
            // in this case it will be an object for amount, date and description with properties 
            // like value and isValid to make the validations to check whether the values are empty and valid
            // and also to manage to display the values for updating when clicked on the individual list item.

            amount: {
                value: defaultInputValues ? defaultInputValues.amount.toString() : '',
                isValid : true,
            },
            date: {
                value: defaultInputValues ? getFormattedDate(defaultInputValues.date) : '',
                isValid : true,
            },
            description: {
                value: defaultInputValues ? defaultInputValues.description : '',
                isValid: true,
            }
        });
    
        //configuring single function to manage all the state changes by identifying the required state modifications.
        //enteredValues is the parameter which is provided by the react on the input elements.
        function inputValuesChangeHandler(inputIdentifier, enteredValues){
            // In this changeHandler function we manage the state using the setState() 
            // function which is done immutably based on the previous state. 
            setInputs((currentInputs) => {
                return {
                    ...currentInputs,
                    [inputIdentifier]: {value: enteredValues, isValid: true},
            };
        });
        }

        function submitHandler(){
            const expenseData = {
             amount: +inputs.amount.value,
             date: new Date(inputs.date.value),
             description: inputs.description.value,
            };

            const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0; 
            const dateIsValid = expenseData.date?.toString() !== 'Invalid Date';
            const descriptionIsValid = expenseData.description?.trim().length > 0;
            
            if(!amountIsValid || !dateIsValid || !descriptionIsValid){
                // Alert.alert('please enter valid input values');
                setInputs((currentInputs) => {
                   return{
                    amount : {value: currentInputs.amount.value, isValid: amountIsValid},
                    date: {value: currentInputs.date.value, isValid: dateIsValid},
                    description: {value: currentInputs.description.value, isValid: descriptionIsValid}
                   } 
                })
                return;
            }

            onSubmit(expenseData);
         }
    const formIsInValid = !inputs.amount.isValid || !inputs.date.isValid || !inputs.description.isValid;

    return (
        <View style={styles.formContainer}>
            <Text style={styles.textTitle}>Manage Your Expenses</Text>
            <View style={styles.rowContainer}>
                <ManageInput label="Amount"
                    style={styles.input}
                    invalid = {!inputs.amount.isValid}
                        textInputConfig={{
                            KeyboardType: 'decimal-pad',
                            // using the bind() method to handle the future changes when the amount input filed is changed.
                            onChangeText: inputValuesChangeHandler.bind(this, 'amount'),
                            value: inputs.amount.value,
                        }}
                    />
                    <ManageInput label="Date"
                        style={styles.input}
                        invalid = {!inputs.date.isValid}
                        textInputConfig={{
                            KeyboardType: 'default',
                            maxLength: 10,
                            placeholder: 'YYYY-DD-MM',
                            // using the bind() method to handle the future changes when the date input filed is changed.
                            onChangeText: inputValuesChangeHandler.bind(this, 'date'),
                            value: inputs.date.value,
                        }
                        }
                    />
            </View>
            
            <ManageInput label="Description"
                invalid = {!inputs.description.isValid}
                textInputConfig={{
                    multiline: true,
                    // using the bind() method to handle the future changes when the description input filed is changed.
                    onChangeText: inputValuesChangeHandler.bind(this, 'description'),
                    value: inputs.description.value,
                }}
            />
            {formIsInValid && <Text style={styles.errorText}>Please check your entered input values.</Text>}
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
    },
    errorText:{
        textAlign: 'center',
        color: GlobalColors.colors.error50,
        padding: 8
    }


});