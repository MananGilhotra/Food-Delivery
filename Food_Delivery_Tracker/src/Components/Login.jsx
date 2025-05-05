import React from "react";
import { useAppContext } from "../context/AppContext";
import "./Login.css";

const Login = () => {
  const { setShowUserLogin, setUser } = useAppContext();

  const [state, setState] = React.useState("login");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    setUser({
      email: "test@greencart.dev",
      name: "Test User",
    });
    setShowUserLogin(false);
  };

  return (
    <div className="login-overlay" onClick={() => setShowUserLogin(false)}>
      <form
        className="login-form"
        onSubmit={submitHandler}
        onClick={(e) => e.stopPropagation()}
      >
        <p className="login-title">
          <span className="text-primary">User</span>{" "}
          {state === "login" ? "Login" : "Sign Up"}
        </p>
        {state === "register" && (
          <div className="login-input-group">
            <p>Name</p>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="Enter name here"
              className="login-input"
              type="text"
              required
            />
          </div>
        )}
        <div className="login-input-group">
          <p>Email</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Enter email here"
            className="login-input"
            type="email"
            required
          />
        </div>
        <div className="login-input-group">
          <p>Password</p>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Enter password here"
            className="login-input"
            type="password"
            required
          />
        </div>
        {state === "register" ? (
          <p>
            Already have account?{" "}
            <span
              onClick={() => setState("login")}
              className="login-link"
            >
              Click here
            </span>
          </p>
        ) : (
          <p>
            Create an account?{" "}
            <span
              onClick={() => setState("register")}
              className="login-link"
            >
              Click here
            </span>
          </p>
        )}
        <button className="login-button">
          {state === "register" ? "Create Account" : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;