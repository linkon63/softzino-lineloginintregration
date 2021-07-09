import React, { useContext, useState } from 'react';
import liff from '@line/liff';
import { useHistory } from 'react-router-dom';
import '../../App.css';
import { UserContext } from '../../App';

const LoginInfo = () => {
    const [dataUser, setDataUser] = useContext(UserContext);
    let history = useHistory();

    liff.init({liffId: "1656181485-PYVwNQ6K"});
    const [name, setName] = useState('');

    //--------- Using a Promise object------------
     liff
     .init({
     liffId: "1656181485-PYVwNQ6K"
     })
     .then(() => {
     // Start to use liff's api
        console.log('Initialize Done by Promise');
     })
     .catch((err) => {
     // Error happens during initialization
     console.log('Error form Initialize',err.code, err.message);
     })

//---------Login Handle-----------------
    const handleLogin = () =>{
      
        if (!liff.isLoggedIn()) {
            liff.login();
          }else{
            console.log('Already Logged in Device');
            history.push('/user');
            
          }
    }
//---------SHOW DETAILS-------------//
    const showProfile = () => {
        if (!liff.isLoggedIn()) {
            liff.login();
          }else{
            liff.getProfile()
            .then(profile => {
              const name = profile.displayName;
              const idToken = liff.getIDToken();
              console.log('ID TOKEN:',idToken) 
              console.log('USER PROFILE',profile);
              setName(name);
              setDataUser(profile);
              history.push('/user')

            })
            .catch((err) => {
              console.log('error', err);
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
        <div className="App">
            <h1 style={{color:'green'}}>WELCOME TO LINE LOGIN</h1>
            <button onClick={handleLogin} style={{border:'none', backgroundColor:'white'}}><img src="https://i.ibb.co/hgqgD2Z/763-7634963-line-logo-png-line-logo-transparent-png-1.png" alt="Login" style={{width:'70%'}} /></button>
            
            <br /><br />

            <button onClick={showProfile} >Show Profile Details</button>
            <p>Display Name Click: {name}</p>
            <br />
            <button onClick={handleLogOut} style={{backgroundColor:'red',color:'white',fontSize:'30px',border:'none'}}>Logout Line</button> <br />
            

        </div>
    );
};

export default LoginInfo;