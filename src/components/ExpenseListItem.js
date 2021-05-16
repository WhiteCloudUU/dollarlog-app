import React from 'react';
import moment from 'moment';
import numeral from 'numeral';
import { Link } from 'react-router-dom';


const ExpenseListItem = ({ id, description, createdAt, amount }) => (
    <div>
        <Link to={`/edit/${id}`}>
            {description}
        </Link>

        <p>
            {numeral(amount / 100).format("$0,0.00")} 
            - 
            {moment(createdAt).format('MMMM Do, YYYY')}
        </p>
    
    </div>
);

export default ExpenseListItem;