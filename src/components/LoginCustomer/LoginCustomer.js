import React, { useEffect, useState } from 'react';
import './LoginCustomer.css';
const LoginCustomer = () => {
    const [user, setUser] = useState();
    useEffect(() => {
        const url = 'https://lineserver.herokuapp.com/allUser';
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [user]);
    return (
        <div>
            <h1>ALL USER</h1>
            {
                user? user?.map(u =>
                    <div className="card">
                        {/* <img src="img_avatar.png" alt="Avatar" style={{width:'100%'}} /> */}
                        <div class="container1">
                            <img src={u.pictureUrl} alt="" style={{width:'10%'}} />
                            <h4><b>{u.displayName}</b></h4>
                            <h4>UserID: {u.userId}</h4>
                        </div>
                    </div> ) :  
                    <h1>Loading.............</h1> 
                
            }
        </div>
    );
};

export default LoginCustomer;