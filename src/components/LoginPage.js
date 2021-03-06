import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">
                Dollar Log
            </h1>

            <p>Save your money for next Bitcoin plunge.</p>

            <button 
                onClick={startLogin}
                className="button"
            >
                Login with Google
            </button>
        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});
 
export default connect(undefined, mapDispatchToProps)(LoginPage);