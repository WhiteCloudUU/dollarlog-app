import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import { login, logout } from './actions/auth';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

import { firebase } from './firebase/firebase';

import LoadingPage from './components/LoadingPage';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
}

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

// firebase.auth().onAuthStateChanged((user) => {
//   if (user) {
//     console.log("log in", user.uid);
//     store.dispatch(login(user.uid));
    
//     store.dispatch(startSetExpenses()).then(() => {
//       renderApp();
//     });
//     history.push('/dashboard');
//   } else {
//     console.log("log out.");
//     store.dispatch(logout());

//     renderApp();
//     history.push('/');
//   }
// })













// const expenseOne = store.dispatch(addExpense({ description: "coffee", amount: 525, createdAt: 150}));
// const expenseTwo = store.dispatch(addExpense({ description: "Rent", amount: 130000, createdAt: 50}));
// const expenseThree = store.dispatch(addExpense({ description: "Water bill", amount: 1500, createdAt: 175}));

// // store.dispatch(setTextFilter("ffee"));

// const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// console.log(visibleExpenses);
