import "./navbar.css";
import Home from "../home/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PostJob from "../postJob/PostJob";
import ViewJobs from "../viewJobs/ViewJobs";

const Navbar = () => {
    return ( 
      <Router>
      <nav className="navbar">
        <div>
          <Link to="/">HOME</Link>
          <Link to="/PostJob">POST JOB</Link>
          <Link to="/ViewJobs">VIEW JOBS</Link>
        </div>
      </nav>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/PostJob" element={<PostJob />} />
        <Route path="/ViewJobs" element={<ViewJobs />} />
      </Routes>
    </Router>
  );

}
 
export default Navbar;