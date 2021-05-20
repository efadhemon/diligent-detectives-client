import React, { useEffect } from 'react';
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


const App = () => {

  useEffect(() => {
    aos.init({ duration: 2000 })
  }, [])

  return (
    <Router>
      <Preloader></Preloader>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='/home'>
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
    </Router>
  );
};

export default App;
