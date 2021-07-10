import { createContext, useState } from 'react';
import liff from '@line/liff/dist/lib';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

import LoginInfo from './components/Login/LoginInfo';
import User from './components/User/User';
import Home from './components/Home/Home';
import PrivateRoute from './components/Private/PrivateRoute';


export const UserContext = createContext();

function App() {

  liff.init({liffId: "1656181485-PYVwNQ6K"});
  
  const [dataUser, setDataUser] = useState({});
  
  return (
    <UserContext.Provider value={[dataUser, setDataUser]}>
        <Router>
          <Switch>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/login">
                <LoginInfo />
              </Route>
              <PrivateRoute path="/user">
                <User />
              </PrivateRoute>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
        </Router>
    </UserContext.Provider>
      
  );
}

export default App;
