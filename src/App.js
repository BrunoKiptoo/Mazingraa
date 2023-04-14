import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './index.css';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import RegistrationForm from '../src/components/Donor/RegistrationForm'
import LearnMore from '../src/components/LearnMore'
import GeneralRegistrationForm from '../src/components/GeneralRegistration';
import PasswordReset from './components/PasswordReset';


function App() {
  return (
    <div className="App">
      <Router> 
        <Routes>
          <Route exact path="/" Component={LandingPage} /> 
          <Route exact path="/login" Component={Login} /> 
          <Route exact path="/donorregistration" Component={RegistrationForm} />
          <Route exact path="/learnmore" Component={LearnMore} /> 
          <Route exact path="/registration" Component={GeneralRegistrationForm} /> 
          <Route exact path="/password-reset" Component={PasswordReset} /> 


        
          {/* Add other routes for other components */}
        </Routes>
      </Router>
      
        {/* <div className="my-custom-class"></div> */}
    </div>
  );
}

export default App;
