import "./navbar.css";
import Home from "../home/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PostJob from "../Login/Login";
// import ViewJobs from "../viewJobs/ViewJobs";
import AvailableJobs from "../AvailableJobs/AvailableJobs";
import Jobs from "../jobs/Jobs";


const Navbar = () => {
  return (
    <Router>
      <nav className="navbar">
        <div>
          <Link to="/">HOME</Link>
          <Link to="/Login">LOGIN</Link>
          {/* <Link to="/ViewJobs">VIEW JOBS</Link> */}
          <Link to="/AvailableJobs">Available Jobs</Link>
        </div>
      </nav>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Login" element={<PostJob />} />
        {/* <Route path="/ViewJobs" element={<ViewJobs />} /> */}
        <Route path="/AvailableJobs" element={<AvailableJobs />} />
        <Route path="/Jobs" element={<Jobs />} />
      </Routes>
    </Router>
  );
};

export default Navbar;
