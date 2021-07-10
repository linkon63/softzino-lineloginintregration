import React, { useContext, useEffect, useState } from 'react';
import liff from '@line/liff';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import '../../App.css';
import './LoginInfo.css';
import Navber from '../Shared/Navigation/Navber';
liff.init({liffId: "1656181485-PYVwNQ6K"});

const LoginInfo = () => {
    const [dataUser, setDataUser] = useContext(UserContext);
    let history = useHistory();

    liff.init({liffId: "1656181485-PYVwNQ6K"});
//---------Login Handle-----------------
    const handleLogin = () =>{
      
        if (!liff.isLoggedIn()) {
            liff.login();
          }else{
            console.log('Already Logged in Device');
            alert('Logged in Device Click show Profile Button');
            // history.push('/user');
            // showProfile();
          }
    }
//---------SHOW DETAILS-------------//
    const showProfile = () => {
      console.log('-----Show Profile Work ------');
        if (!liff.isLoggedIn()) {
            liff.login();
          }else{
            liff.getProfile()
            .then(profile => {
              const name = profile.displayName;
              // const idToken = liff.getIDToken();
              // console.log('ID TOKEN:',idToken) 
              console.log('USER PROFILE',profile);
              setDataUser(profile);
              history.push('/user')

            })
            .catch((err) => {
              console.log('Error from Profile:', err);
            });
          }
    }
// ----------Handle LogOut -------------
    const handleLogOut = () => {
        liff.logout();
        console.log('Logout');
        alert('Logout Done');
        history.push("/home");    
    }

    return (
      <div>
        <Navber></Navber>
                <div className="App">
                <h1 style={{color:'green'}}>WELCOME TO LINE LOGIN</h1>
                <button onClick={handleLogin} style={{border:'none', backgroundColor:'white'}}><img src="https://i.ibb.co/hgqgD2Z/763-7634963-line-logo-png-line-logo-transparent-png-1.png" alt="Login" style={{width:'70%'}} /></button>
                
                <br /><br />

                <button onClick={showProfile} className="lineBtn">Show Profile Details</button>
                <br />
                <br />
                <br />
                <button onClick={handleLogOut} className='logOut' >Logout Line</button> <br />
                

            </div>
      </div>
    );
};

export default LoginInfo;