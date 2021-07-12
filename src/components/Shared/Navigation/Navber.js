import React from 'react';
import { Link } from 'react-router-dom';
import './Navber.css';
const Navber = () => {
    return (
        <div>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/user">Users</Link></li>
                <li><Link to="/">Contact</Link></li>
                <li style={{float:"right"}}><Link class="active" to="/login">Login</Link></li>
            </ul>
        </div>
    );
};

export default Navber;