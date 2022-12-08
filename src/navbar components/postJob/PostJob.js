import "./PostJob.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PostJob = () => {
  // const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
//   const [authenticated, setauthenticated] = useState(
//   localStorage.getItem(localStorage.getItem("authenticated") || false)
// );
  const users = [{ username: "dc@gmail.com", password: "123" }];
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const account = users.find((user) => user.username === username);
    if (account && account.password === password) {
    localStorage.setItem("authenticated", true);
    navigate("/ViewJobs");
  }
};

    return (
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="username" placeholder="nome@email.com.br" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" />
          </div>
          <button className="primary" onClick={()=>handleSubmit()}>Submit</button>
        </form>
      </div>
    );
  }

export default PostJob;
