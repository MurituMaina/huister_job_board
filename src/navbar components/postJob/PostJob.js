import "./PostJob.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PostJob = () => {
  const navigate = useNavigate();
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [authenticated, setauthenticated] = useState(
  localStorage.getItem(localStorage.getItem("authenticated") || false)
);
  const users = [{ username: "dc@gmail.com", password: "123" }];
  const handleSubmit = (e) => {
  e.preventDefault();
  const account = users.find((user) => user.username === username);
  if (account && account.password === password) {
  localStorage.setItem("authenticated", true);
  navigate("/dashboard");
  }
};

    return (
      <div>
        <form className="form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="nome@email.com.br" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" />
          </div>
          <button className="primary">Submit</button>
        </form>
      </div>
    );
  }

export default PostJob;
