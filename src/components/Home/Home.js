import React from 'react';
import { Link } from 'react-router-dom';
import LoginCustomer from '../LoginCustomer/LoginCustomer';
const Home = () => {
    return (
        <div className='App'>
            <h1 style={{color:'green'}}>WELCOME TO LINE MESSENGER</h1>
            <Link to='/login'>
                <img src="https://i.ibb.co/hgqgD2Z/763-7634963-line-logo-png-line-logo-transparent-png-1.png" alt="Login" style={{width:'15%'}} />
            </Link>
            {/* <LoginCustomer></LoginCustomer> */}
        </div>
    );
};

export default Home;