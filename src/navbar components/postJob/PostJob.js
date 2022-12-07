import "./PostJob.css";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";

const PostJob = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((recruiter) => {
          onLogin(recruiter);
        });
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
          />
        </div>
        <button
          type="submit"
          className="primary"
          onClick={() => handleSubmit()}
        >
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
