import "./navbar.css";
import Home from "../home/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PostJob from "../Login/Login";
import ViewJobs from "../viewJobs/ViewJobs";
import AvailableJobs from "../AvailableJobs/AvailableJobs";
import Jobs from "../jobs/Jobs";


const Navbar = ({ recruiter, setRecruiter }) => {
  // if
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setRecruiter(null);
      }
    });
  }
  return (
    <header>
      <Router>
        <nav className="navbar">
          <div>
            <Link to="/">Home</Link>
            <Link to="/ViewJobs">View Jobs</Link>
            <Link to="/AvailableJobs">Available Jobs</Link>
            <Link to="/jobs">Post a Job</Link>
            <Link to="/Login">Login</Link>
            <Link to="/logout">Logout</Link>
          </div>
        </nav>
        <Routes>
          <Route exact path="/" element={ <Home /> } />
          <Route path="/Login" element={ <PostJob /> } />
          <Route path="/ViewJobs" element={<ViewJobs />} />
          <Route path="/AvailableJobs" element={ <AvailableJobs /> } />
          <Route path="/Jobs" element={ <Jobs /> } />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </header>
  );
};

export default Navbar;
