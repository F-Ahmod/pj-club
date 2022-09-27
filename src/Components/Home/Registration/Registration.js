import React, { useState } from "react";
import "./Registration.css";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import useFirebase from "../../../Firebase/useFirebase";

const Registration = () => {
  const [msg, setMsg] = useState("");
  const { handleUserRegister } = useFirebase();
  const { register, handleSubmit } = useForm();
  const location = useLocation();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    fetch("http://localhost:5000/register", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setMsg("your fom is pandding")
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    //handleUserRegister(data.email, data.password, location, navigate);
    // console.log(data);
  };

  return (
    <div
      className="mt-5 mb-3 mx-auto"
      style={{ backgroundColor: "#738988  ", width: "400px", height: "350px" }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          style={{ marginTop: "100px" }}
          className="input-field mb-2"
          name="Name"
          placeholder="Your Name"
          type="text"
          {...register("Name", { required: true })}
        />
        <br />
        <input
          className="input-field mb-2"
          name="email"
          placeholder="Email"
          type="email"
          {...register("email", { required: true })}
        />
        <br />

        <input
          class="text-input"
          id="phone"
          name="phone"
          type="phone"
          placeholder="Phone Number"
          {...register("phone", { required: true })}
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

        <input
          className="submit-btn #99535E mt-3"
          type="submit"
          value="Register"
        />
        <br />
        <NavLink style={{ textDecoration: "none" }} to="/login">
          <Button className="text-light" variant="text">
            Already Register? Please Login
          </Button>
        </NavLink>
        {msg && (
          <div class="alert alert-success" role="alert">
            {msg}
          </div>
        )}
      </form>

      <NavLink style={{ textDecoration: "none" }} to="/">
        <Button className="text-light" variant="text">
          Go Home Page
        </Button>
      </NavLink>
    </div>
  );
};

export default Registration;
