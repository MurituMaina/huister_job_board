import "./navbar.css";
import Home from "../home/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginForm from "../Login/LoginForm";
import ViewJobs from "../viewJobs/ViewJobs";
import Jobs from "../jobs/Jobs";


const Navbar = () => {
  return (
    <Router>
      <nav className="navbar">
        <div>
          <Link to="/">HOME</Link>
          <Link to="/LoginForm">LOGIN</Link>
          <Link to="/ViewJobs">VIEW JOBS</Link>
          {/* <Link to="/Jobs">Jobs</Link> */}
        </div>
      </nav>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/LoginForm" element={<LoginForm/>} />
        <Route path="/ViewJobs" element={<ViewJobs />} />
        <Route path="/Jobs" element={<Jobs />} />
      </Routes>
    </Router>
  );
};

export default Navbar;
