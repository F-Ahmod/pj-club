import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import useFirebase from "../../../Firebase/useFirebase";
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const { singinWithGoogle, loginUser } = useFirebase();
  const location = useLocation();

  const onSubmit = (data) => {
    loginUser(data.email, data.password, location, navigate);
  };

  const handleGoogleSignIn = () => {
    singinWithGoogle(location, navigate);
  };

  return (
    <div
      className="mt-5 mb-3 mx-auto p-3 rounded"
      style={{ backgroundColor: "#fff", width: "350px" }}
    >
      <h5>Login</h5>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input-field "
          name="email"
          placeholder="Email"
          type="email"
          {...register("email", { required: true })}
        />
        <br />
        <input
          className="input-field "
          name="password"
          type="password"
          placeholder="Password"
          {...register("password", { required: true })}
        />
        <br />

        <input className="submit-button" type="submit" value="Loging" />
        <br />
      </form>
      <NavLink to="/login">
        <button className="submit-button mb-3" onClick={handleGoogleSignIn}>
          Google Sign In
        </button>
      </NavLink>
      <br />
      <NavLink style={{ textDecoration: "none" }} to="/register">
        <button>register</button>
      </NavLink>
    </div>
  );
};

export default Login;
