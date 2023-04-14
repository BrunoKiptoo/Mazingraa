import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './index.css';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import RegistrationForm from '../src/components/Donor/RegistrationForm'
import LearnMore from '../src/components/LearnMore'

function App() {
  return (
    <div className="App">
      <Router> 
        <Routes>
          <Route exact path="/" Component={LandingPage} /> 
          <Route exact path="/login" Component={Login} /> 
          <Route exact path="/donorregistration" Component={RegistrationForm} />
          <Route exact path="/learnmore" Component={LearnMore} /> 

        
          {/* Add other routes for other components */}
        </Routes>
      </Router>
      
        {/* <div className="my-custom-class"></div> */}
    </div>
  );
}

export default App;
