import React, { useContext } from 'react';
import { UserContext } from '../../App';
import { Link, useHistory } from 'react-router-dom';

import LoginCustomer from '../LoginCustomer/LoginCustomer';
import Navber from '../Shared/Navigation/Navber';

import './User.css';

const User = () => {
    const [dataUser, setDataUser] = useContext(UserContext);
    console.log('DATA USER :', dataUser);
    let history = useHistory();

    // ---------Sending User to the Server and DB--------------------//
    const sendData = () => {

        const url = 'https://lineserver.herokuapp.com/addUser';
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataUser)
        })
            .then(res => {
                console.log('Server Side Response', res)
                alert('Your Data has Sended to the server');
            }
            )
    }


    return (
        <div>
            <Navber></Navber>
            <div className="container">
                <div className="">
                    <br /> <br />
                    <div>
                        <button onClick={sendData} className="lineBtn">Send Data</button>
                    </div>
                    <h1>USER DATA SHOW</h1>
                    <h3>USER ID: {dataUser.userId}</h3>
                    <h3>User Name : {dataUser.displayName}</h3>

                    <h1 style={{ color: 'green' }}>CHAT WITH BOT</h1>
                    <a href="https://lin.ee/dghFawG"><img src="https://scdn.line-apps.com/n/line_add_friends/btn/en.png" alt="Add friend" /></a>
                    <h4>BOT-ID: @310snrtx   ||   Or Scan Code</h4>
                    <img src="https://qr-official.line.me/sid/L/310snrtx.png" alt="" />
                </div>
                <div>
                    <LoginCustomer></LoginCustomer>
                </div>
            </div>
        </div>
    );
};

export default User;