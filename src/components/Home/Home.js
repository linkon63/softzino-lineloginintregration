import React, { useEffect, useState } from 'react';
// import axios from '../../api/axios';
import axios from 'axios';

import { Link } from 'react-router-dom';
import LoginCustomer from '../LoginCustomer/LoginCustomer';
import Navber from '../Shared/Navigation/Navber';

const Home = () => {
    const [user, setUser] = useState([]);

    // useEffect(() => {
    //     fetch('https://lineserver.herokuapp.com/allUser', {
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Access-Control-Allow-Origin": "*"
    //         }
    //     })
    //         .then(res => res.json())
    //         .then(data => setUser(data))
    // }, []);

    return (
        <div>
            <Navber></Navber>

            <div className='App'>
                <h1 style={{ color: 'green' }}>WELCOME TO LINE MESSENGER</h1>
                <Link to='/login'>
                    <img src="https://i.ibb.co/hgqgD2Z/763-7634963-line-logo-png-line-logo-transparent-png-1.png" alt="Login" style={{ width: '15%' }} />
                </Link>
            </div>
            {/* <LoginCustomer></LoginCustomer> */}
            {/* {
                user?.map(us => <div>
                    <p>Name:{us.displayName}</p>
                </div>)
            } */}
        </div>
    );
};

export default Home;