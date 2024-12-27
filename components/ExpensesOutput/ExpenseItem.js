import {View, Text, StyleSheet, Pressable} from 'react-native';

import { GlobalColors } from '../../constants/colors';
import {useNavigation} from '@react-navigation/native';

import { getFormattedDate } from '../../utilities/date';


function ExpenseItem({id, description, date, amount}){

    const navigation = useNavigation();

    // const amountFixed = amount.toFixed(2); 
    
    function expenseListPressHandler(){
        navigation.navigate('ManageExpenses', {
            expenseItemId: id,
        });
        // console.log('pressed');
    }

    return (
        <Pressable onPress={expenseListPressHandler} style={({pressed}) => pressed && styles.pressed}>
            <View style={styles.expenseItemContainer}>
                <View>
                    <Text style={[styles.textBatch ,styles.description]}>{description}</Text>
                    {/* <Text style={[styles.textBatch]}>{getFormattedDate(date)}</Text> */}
                    <Text style={[styles.textBatch]}>{getFormattedDate(date)}</Text>
                </View>
                <View style={styles.amountContainer}>
                    <Text style={styles.amount}>{amount}</Text>
                </View>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.75,
    },
    expenseItemContainer:{
        padding: 12,
        marginVertical: 8,
        backgroundColor: GlobalColors.colors.primary500,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 6,
        elevation: 3,
        shadowColor: GlobalColors.colors.gray500,
        shadowRadius: 4,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4,
    },
    textBatch:{
        color: GlobalColors.colors.primary50,
    },
    description: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    amountContainer:{
        paddingHorizontal: 12,
        paddingVertical: 4,
        borderRadius: 4,
        minWidth: 80,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    amount:{
        fontWeight: 'bold',
        color: GlobalColors.colors.primary700,
    }
})

export default ExpenseItem;