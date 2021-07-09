import React, { useContext } from 'react';
import { UserContext } from '../../App';
import { Link, useHistory } from 'react-router-dom';
import LoginCustomer from '../LoginCustomer/LoginCustomer';
import './User.css';
const User = () => {
    const [dataUser, setDataUser] = useContext(UserContext);
    console.log('DATA USER :', dataUser);
    let history = useHistory();


    // ---------Sending User to the Server and DB--------------------//
    const sendData = () => {

        const url = 'http://localhost:5000/addUser';
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
    <div className="container">
            <div className="">
                <div>
                    <Link to='/home'>Home</Link> <br />
                    <Link to='/login'>Login</Link> <br /> <br />
                    <button onClick={sendData}>Send Data</button>
                </div>
                <h1>USER DATA SHOW</h1>
                <h3>USER ID: {dataUser.userId}</h3>
                <h3>User Name : {dataUser.displayName}</h3>

                <h1 style={{ color: 'green' }}>Chat with Bot</h1>
                <h2>Add Friend</h2>
                <a href="https://lin.ee/dghFawG"><img src="https://scdn.line-apps.com/n/line_add_friends/btn/en.png" alt="Add friend" /></a>
                <p>Bot ID: @310snrtx</p>
                <p>Or Scan Code</p>
                <img src="https://qr-official.line.me/sid/L/310snrtx.png" alt="" />
            </div>
            {/* User Show */}
            <div>
                <LoginCustomer></LoginCustomer>
            </div>
    </div>
);
};

export default User;