import React from 'react';
import { Link } from 'react-router-dom';
import './Design.css';

const Design = () => {
    return (
        <div>
             <body>
                <div className="main">
                    <p className="sign" align="center">SIGN IN</p>
                        <form className="form1" > 
                            <input className="un " type="text" align="center" placeholder="USER" disabled/>
                            <input className="pass" type="password" align="center" placeholder="PASS"  disabled />
                            <Link to='/login' className="submit" align="center">LOGIN LINE</Link>
                            <p className="forgot" align="center"><a href="#" />Forgot Password?</p>
                        </form>
                </div>
             </body>
        </div>
    );
};

export default Design;