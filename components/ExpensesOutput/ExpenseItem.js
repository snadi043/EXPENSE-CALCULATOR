import {View, Text, StyleSheet, Pressable} from 'react-native';

// import {getFormattedDate} from './utilities/date';

import { GlobalColors } from '../../constants/colors';

function ExpenseItem({description, date, amount}){
    return (
        <Pressable>
            <View style={styles.expenseItemContainer}>
                <View>
                    <Text style={[styles.textBatch ,styles.description]}>{description}</Text>
                    {/* <Text style={[styles.textBatch]}>{getFormattedDate(date)}</Text> */}
                    <Text style={[styles.textBatch]}>{date}</Text>

                </View>
                <View style={styles.amountContainer}>
                    <Text style={styles.amount}>{amount.toFixed(2)}</Text>
                </View>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
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