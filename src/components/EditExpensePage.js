import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

const EditExpensePage = (props) => (
    <div>
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Edit expense</h1>
            </div>
        </div>

        <div className="content-container">
            <ExpenseForm
                expense={props.expense}
                onSubmit={(expense) => {
                    props.startEditExpense(props.expense.id, expense);
                    props.history.push('/dashboard');
                }}
            />
            <button
                onClick={() => {
                    props.startRemoveExpense(props.expense.id);
                    props.history.push('/');
                }}
                className="button button--secondary"
            >
                Remove Expense
            </button>
        </div>


    </div>
);

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) => (expense.id === props.match.params.id))
});

const mapDispatchToProps = (dispatch) => ({
    startRemoveExpense: (id) => dispatch(startRemoveExpense(id)),
    startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense))
});


export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);