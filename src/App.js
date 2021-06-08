import React, { createContext, useEffect, useState } from 'react';
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Admin from './components/Admin/Admin/Admin';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import UserService from './components/UserService/UserService/UserService';
import aos from 'aos';
import 'aos/dist/aos.css';
import Preloader from './components/Preloader/Preloader';

window.addEventListener('load', function () {
  document.querySelector('.preloader-container').style.opacity = '0';
  setTimeout(() => {
    document.querySelector('.preloader-container').style.display = 'none';
  }, 2000)
})

export const UserContext = createContext();

export const handleLogout = () => {
  localStorage.removeItem('loggedInUser');
  localStorage.removeItem('admin');
  window.location.reload();
}

const App = () => {

  useEffect(() => {
    aos.init({ duration: 2000 })
  }, [])

  const [loggedInUser, setLoggedInUser] = useState(JSON.parse(localStorage.getItem('loggedInUser')) || {})

  return (
    <Router>
      <Preloader></Preloader>
      <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <PrivateRoute path='/user'>
            <UserService></UserService>
          </PrivateRoute>
          <PrivateRoute path='/admin'>
            <Admin></Admin>
          </PrivateRoute>
          <Route path='/login'>
            <Login></Login>
          </Route>
        </Switch>
      </UserContext.Provider>
    </Router>
  );
};

export default App;
