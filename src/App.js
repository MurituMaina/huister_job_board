
import './App.css'
import { useState, useEffect } from 'react';
import LoginForm from './navbar components/Login/LoginForm';
import Navbar from './navbar components/navbar/Navbar';
// import Login from '../src/navbar components/Login/Login'

function App() {

   const [recruiter, setRecruiter] = useState(null);

   useEffect(() => {
     // auto-login
     fetch("/me").then((r) => {
       if (r.ok) {
         r.json().then((recruiter) => setRecruiter(recruiter));
       }
     });
   }, []);

   if (!recruiter) return <LoginForm onLogin={setRecruiter} />;


  return (
   <div className='App'>
    <Navbar recruiter = {recruiter}/>
    {console.log("Hello World", recruiter.id)}
    {/* <LoginForm /> */}

   </div>
  );
}

export default App;
