import React from 'react';
import {Route} from 'react-router-dom'
import Header from './Components/Header/Header';
import HomeBody from './Components/Body/HomeBody';
import About from './Components/Body/About';
import Contact from './Components/Body/Contact';
import Login from './Components/Body/Login';
import Signup from './Components/Body/Register/Signup';
import './App.css';
const App = () => {
    return(
      <div>
        <Header />
        <Route exact path="/">
          <HomeBody />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Signup />
        </Route>
        
      </div>
    )
}

export default App;
