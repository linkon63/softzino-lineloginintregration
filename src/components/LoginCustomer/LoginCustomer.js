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
        <div className="userMain">

                    <div>
                        <h3>ALL USER</h3>
                        {
                            user? user?.map(u =>
                                // <div className="card">
                                //     {/* <img src="img_avatar.png" alt="Avatar" style={{width:'100%'}} /> */}
                                //     <div className="container1">
                                //         <img src={u.pictureUrl} alt="" style={{width:'10%'}} />
                                //         <h4><b>{u.displayName}</b></h4>
                                //         <h4>UserID: {u.userId}</h4>
                                //     </div>
                                // </div> 
                                <div className="container">
                                    <div class="service-details">
                                        <img src={u.pictureUrl} alt="realm" />
                                        <div class="service-hover-text">
                                            <h3>{u.displayName}</h3>
                                            <p> USER ID: {u.userId}</p>
                                        </div>
                                    </div>
                                </div>
                                )
                            
                                :  <h3>Loading.............</h3> 
                            
                        }
                    </div>
            </div>
    );
};

export default LoginCustomer;