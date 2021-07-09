import React, { useEffect, useState } from 'react';
import './LoginCustomer.css';
const LoginCustomer = () => {
    const [user, setUser] = useState();
    useEffect( ()=> {
        const url = 'http://localhost:5000/alluser';
        fetch(url)
        .then(res => res.json())
        .then(data => setUser(data))
    },[]);
    return (
        <div>
            {
                user?.map(u => 
                    <div className="card">
                        {/* <img src="img_avatar.png" alt="Avatar" style={{width:'100%'}} /> */}
                        <div class="container">
                            <h4><b>{u.displayName}</b></h4> 
                            <p>UserID: {u.userId}</p> 
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default LoginCustomer;