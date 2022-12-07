import "./PostJob.css";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";

const PostJob = ({ onLogin }) => {
  // const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password_digest, setPasswordDigest] = useState("");
  // const [errors, setErrors] = useState([]);
  // const [authenticated, setAuthenticated] = useState(
  // localStorage.getItem(localStorage.getItem("authenticated") || false)
  // );
  // const users = [{ username: "dc@gmail.com", password: "123" }];
  // const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); 
    // const account = users.find((user) => user.username === username);
    // if (account && account.password === password) {
    // localStorage.setItem("authenticated", true);
    // navigate("/ViewJobs");
    // }
    console.log(email, password_digest);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password_digest,
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((recruiter) => onLogin(recruiter));
      } else {
        r.json().then((err) => console.log(err));
      }
    });
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="username"
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="nome@email.com.br"
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            autoComplete="current-password"
            value={password_digest}
            onChange={(e) => setPasswordDigest(e.target.value)}
            name="password"
          />
        </div>
          <button type="submit" className="primary" onClick={() => handleSubmit()}>
          {/* Submit */}
          {isLoading ? "Loading..." : "Login"}
        </button>
        <div>
          {/* {errors.map((error) => (<Error key={error}>{error}</Error>
          ))} */}
        </div>
      </form>
    </div>
  );
};

export default PostJob;
