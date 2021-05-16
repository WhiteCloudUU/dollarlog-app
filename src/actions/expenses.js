import uuid from 'uuid'
import database from '../firebase/firebase'

// Add expense
export const addExpense = (expense) => {
    return {
        type: "ADD_EXPENSE",
        expense
    };
};

export const startAddExpense = (expenseData = {}) => {
    const {
        description = "",
        note = "",
        amount = 0,
        createdAt = 0
    } = expenseData;
    const expense = { description, note, amount, createdAt }

    return (dispatch) => {
        database.ref('expenses').push(expense)
            .then((ref) => {
                dispatch(addExpense({
                    id: ref.key,
                    ...expense
                }));
            })
    }
}



// Remove expense

export const removeExpense = (id) => {
    return {
        type: "REMOVE_EXPENSE",
        id
    };
};

export const editExpense = (id, updates = {}) => {
    return {
        type: "EDIT_EXPENSE",
        id,
        updates
    }
}