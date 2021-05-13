import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter from "./routers/AppRouter";
import configureStore from './store/configureStore';

import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

const store = configureStore();

const expenseOne = store.dispatch(addExpense({ description: "coffee", amount: 525, createdAt: 150}));
const expenseTwo = store.dispatch(addExpense({ description: "Rent", amount: 130000, createdAt: 50}));
const expenseThree = store.dispatch(addExpense({ description: "Water bill", amount: 1500, createdAt: 175}));

// store.dispatch(setTextFilter("ffee"));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)
ReactDOM.render(jsx, document.getElementById('app'));
