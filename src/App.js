import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import './index.css';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
// import RegistrationForm from '../src/components/Donor/RegistrationForm'
import LearnMore from '../src/components/LearnMore'
import GeneralRegistrationForm from '../src/components/GeneralRegistration';
import PasswordReset from './components/PasswordReset';
import DonorDashBoard from '../src/components/Donor/Dashboard';
import OrganizationDahboard from '../src/components/Organization/Dashboard';
// import DonorNavBar from './components/Donor/DonorNavBar';
// import NewDonationContent from './components/Donor/NewDonationContent';
// import ReminderContent from './components/Donor/ReminderContent';
// import Profilepic from '../src/components/Donor/Profilepic'
import Dashboard from '../src/components/Admin/Dashboard';
import AdminLogin from '../src/components/Admin/AdminLogin';
import DonorLogin from '../src/components/Donor/DonorLogin';
import OrgLogin from '../src/components/Organization/OrgLogin';
import DonationForm from './components/Donor/DonationForm';
// import MpesaPayment from './components/Donor/MpesaPayment'
import MpesaPayment from './components/Donor/MpesaPayment';
// import ClimateJusticeComponent from './components/ClimateJusticeComponent';
import Footer from './components/Footer';
import DirectDonation from './components/DirectDonation';
import ThankYou from './components/Donor/ThankYou';
// import Login from './components/Login';





function App() {

  const [authenticated, setAuthenticated] = useState(false);

  function handleLogin() {
    console.log("handleLogin called");
    // handle login logic here
    setAuthenticated(true);
    console.log("authenticated:", authenticated);
  }
  


  return (
    <div className="App">
      <Router> 
        <Routes>

                 {/* protected routes */}
          <Route exact path="/donor-dashboard" Component={DonorDashBoard} />
          <Route exact path="/organization-dashboard" Component={OrganizationDahboard} />
          <Route exact path="/admin-dashboard" Component={Dashboard} />




          <Route exact path="/" Component={LandingPage} /> 
          <Route exact path="/donorregistration" Component={GeneralRegistrationForm} />
          <Route exact path="/learnmore" Component={LearnMore} /> 
          <Route exact path="/registration" Component={GeneralRegistrationForm} /> 
          <Route exact path="/password-reset" Component={PasswordReset} /> 

          <Route exact path="/donor-login" Component={DonorLogin} onLogin={handleLogin}/>
          <Route exact path="/organization-login" Component={OrgLogin} /> 
          <Route exact path="/admin-login" Component={AdminLogin} />
          <Route exact path="/login" Component={Login} onLogin={handleLogin}/>  
          
      

          <Route exact path="/transactions" Component={DonationForm} /> 
          <Route exact path="/mpesa-transactions" Component={MpesaPayment} />
          <Route exact path="/footer" Component={Footer} />
          <Route exact path="/organizations" Component={DirectDonation} />
          <Route exact path="/thankyou" Component={ThankYou} />
       



        
          {/* Add other routes for other components */}
        
        </Routes>
        {/* <DonorNavBar/> */}
        {/* <NewDonationContent/> */}
        {/* <ReminderContent/> */}
        {/* <Profilepic/> */}
        {/* <ClimateJusticeComponent/> */}
        {/* <Footer/> */}
        
      </Router>
    

      {/* <Dashboard/> */}
        {/* <div className="my-custom-class"></div> */}
    </div>
  );
}

export default App;








// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import './App.css';
// import './index.css';
// import LandingPage from './components/LandingPage';
// import Login from './components/Login';
// // import RegistrationForm from '../src/components/Donor/RegistrationForm'
// import LearnMore from '../src/components/LearnMore'
// import GeneralRegistrationForm from '../src/components/GeneralRegistration';
// import PasswordReset from './components/PasswordReset';
// import DonorDashBoard from '../src/components/Donor/Dashboard';
// import OrganizationDahboard from '../src/components/Organization/Dashboard';
// // import DonorNavBar from './components/Donor/DonorNavBar';
// // import NewDonationContent from './components/Donor/NewDonationContent';
// // import ReminderContent from './components/Donor/ReminderContent';
// // import Profilepic from '../src/components/Donor/Profilepic'
// import Dashboard from '../src/components/Admin/Dashboard';
// import AdminLogin from '../src/components/Admin/AdminLogin';
// import DonorLogin from '../src/components/Donor/DonorLogin';
// import OrgLogin from '../src/components/Organization/OrgLogin';
// import DonationForm from './components/Donor/DonationForm';
// // import MpesaPayment from './components/Donor/MpesaPayment'
// import MpesaPayment from './components/Donor/MpesaPayment';
// // import ClimateJusticeComponent from './components/ClimateJusticeComponent';
// import Footer from './components/Footer';
// import DirectDonation from './components/DirectDonation';
// import ThankYou from './components/Donor/ThankYou';

// import { useNavigate } from 'react-router-dom';


// function App() {

//     const [authenticated, setAuthenticated] = useState(false);
  
//     const [email, setEmail] = useState('');
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [isLoggedIn, setIsLoggedIn] = useState(false);
  
//     const handleSubmit = (event) => {
//       event.preventDefault();
//       const data = { email, username, password };
//       fetch('/api/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//         credentials: 'include', // include cookies in the request
//       })
//         .then(() => {
//           // If the login request is successful, redirect the user to the dashboard page
//           setIsLoggedIn(true)
//           window.location.href = `/donor-dashboard?email=${email}&username=${username}`;
//           setAuthenticated(true); // Set authenticated to true
//         })
//         .catch(error => console.error('Error logging in:', error));
//     };
    
  
//     const handleLogout = async () => {
//       try {
//         await fetch('http://127.0.0.1:5000/logout', { method: 'DELETE' });
//         setIsLoggedIn(false);
//         window.location.href = '/login'; // Use window.location.href to navigate to a different URL
//       } catch (error) {
//         console.log(error);
//       }
//     };
  
  
//   return (
//     <div className="App">
//       <Router>
//       <Routes>
//   {authenticated ? (
//     <>
//       {/* Protected routes */}
//       <Route exact path="/donor-dashboard" element={DonorDashBoard} />
//       <Route exact path="/organization-dashboard" element={OrganizationDahboard} />
//       <Route exact path="/admin-dashboard" element={Dashboard} />
//     </>
//   ) : (
//     <>
//       {/* Public routes */}
//       <Route exact path="/" element={LandingPage} />
//       <Route exact path="/donorregistration" element={GeneralRegistrationForm} />
//       <Route exact path="/learnmore" element={LearnMore} />
//       <Route exact path="/registration" element={GeneralRegistrationForm} />
//       <Route exact path="/password-reset" element={PasswordReset} />

//       {/* Protected route */}
//       <Route
//         exact
//         path="/donor-login"
//         element={
//           <DonorLogin
//             handleSubmit={handleSubmit}
//             email={email}
//             setEmail={setEmail}
//             username={username}
//             setUsername={setUsername}
//             password={password}
//             setPassword={setPassword}
//             handleLogout={handleLogout}
//           />
//         }
//       />

//       {/* Public routes */}
//       <Route exact 
//       path="/organization-login" 
//       element={OrgLogin} />
//       <Route
//         exact
//         path="/admin-huhfuhfhdfhdhlfhjfdhzkjfdzfdhhzfzhhfzzhuzfuzfzhuhfz"
//         element={AdminLogin}
//       />

//       <Route exact path="/transactions" element={DonationForm} />
//       <Route exact path="/mpesa-transactions" element={MpesaPayment} />
//       <Route exact path="/footer" element={Footer} />
//       <Route exact path="/organizations" element={DirectDonation} />
//       <Route exact path="/thankyou" element={ThankYou} />
//     </>
//   )}
// </Routes>
//       </Router>
//     </div>
//   );
// }
// export default App;

