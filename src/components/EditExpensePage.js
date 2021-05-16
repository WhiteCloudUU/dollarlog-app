import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, startRemoveExpense } from '../actions/expenses';

const EditExpensePage = (props) => (
    <div>
        <ExpenseForm 
            expense={props.expense}
            onSubmit={(expense) => {
                props.dispatch(editExpense(props.expense.id, expense));
                props.history.push('/');
            }}
        />

        <button
        onClick={() => {
            props.startRemoveExpense(props.expense.id);
            props.history.push('/');
        }}
        >
            Remove
        </button>

    </div>
);

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) => (expense.id === props.match.params.id))
});

const mapDispatchToProps = (dispatch) => ({
    startRemoveExpense: (id) => dispatch(startRemoveExpense(id))
    // startUpdateExpense: (id, expense) => dispatch()
});


export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);