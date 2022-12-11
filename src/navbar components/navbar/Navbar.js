import "./navbar.css";
import Home from "../home/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import LoginForm from "../Login/LoginForm";
import ViewJobs from "../viewJobs/ViewJobs";
// import AvailableJobs from "../AvailableJobs/AvailableJobs";
import Jobs from "../jobs/Jobs";



const Navbar = ({recruiter, setRecruiter}) => {

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setRecruiter(null);
      }
    });
  }



  return (
    <Router>
      <nav className="navbar">
        <div>
          <Link to="/">HOME</Link>
          {/* <Link to="/LoginForm">LOGIN</Link> */}
          <Link to="/ViewJobs">VIEW JOBS</Link>
          <Link to="/Jobs">Jobs</Link>
          <Link to="/logout" onClick={handleLogoutClick}>Logout</Link>
        </div>
      </nav>
      <Routes>
        <Route exact path="/" element={<Home recruiter={recruiter} />} />
        {/* <Route path="/LoginForm" element={<LoginForm/>} /> */}
        <Route path="/ViewJobs" element={<ViewJobs recruiter={recruiter} />} />
        <Route path="/Jobs" element={<Jobs recruiter={recruiter} />} />
        {/* <Router variant="outline"onClick=""  element={<Logout />}/> */}
      </Routes>
      {recruiter.email}
    </Router>
  );
};

export default Navbar;
