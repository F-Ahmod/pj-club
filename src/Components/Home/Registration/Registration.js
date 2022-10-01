import React, { useEffect, useState } from "react";
import "./Registration.css";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { NavLink} from "react-router-dom";


const Registration = () => {
  const [isPending, setIsPending]=useState("")
  const [msg, setMsg] = useState("");
  const { register, handleSubmit } = useForm();
  useEffect(() => {
    const pending = localStorage.getItem("pending")
    setIsPending(pending)
      console.log(pending);
  }, [register]);

  const onSubmit = (data) => {
    console.log(data);
    fetch("http://localhost:5000/aa", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
      
        console.log("Success:", data);
        setMsg("Your form is pandding")
      })
      .catch((error) => {
        console.error("Error:", error);
      });

  };

  return (
    <div
      className="mt-5 mb-3 mx-auto p-3 rounded"
      style={{ backgroundColor: "#fff", width: "350px" }}
    >
  


      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          
          className="input-field"
          name="Name"
          placeholder="Your Name"
          type="text"
          {...register("Name", { required: true })}
        />
        <br />
        <input
          className="input-field "
          name="email"
          placeholder="Email"
          type="email"
          {...register("email", { required: true })}
        />
        <br />

        <input
          className="input-field"
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
          className="submit-button"
          type="submit"
          value="Register"
        />
        
        <NavLink style={{ textDecoration: "none" }} to="/login">
          <Button className="text-dark" variant="text">
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
        <Button className="text-dark" variant="text">
          Go Home Page
        </Button>
      </NavLink>
    </div>
  );
};

export default Registration;
