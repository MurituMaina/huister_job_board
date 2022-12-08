import "./Login.css";
import { useState } from "react";
import Error from "../Error";
// import { useNavigate } from "react-router-dom";

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState([]);
  // const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
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
          console.log(email, password);

          // navigate("/");
        });
      } else {
        r.json().then((err) => setError(err.errors));
      }
    });
  }

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
          {error.map((error) => (
            <Error key={error}>{error}</Error>
          ))}
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
