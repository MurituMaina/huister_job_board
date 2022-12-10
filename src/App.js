import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './navbar components/navbar/Navbar';
import Login from '../src/navbar components/Login/Login'

function App() {
  const[recruiter, setRecruiter] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((recruiter) => setRecruiter(recruiter));
      }
    });
  }, []);

  if (!recruiter) return <Login onLogin={ setRecruiter } />;
  return (
   <div className='App'>
      <Navbar recruiter={ recruiter } />
   </div>
  );
}

export default App;
