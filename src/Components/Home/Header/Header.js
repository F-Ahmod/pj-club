import React from "react";
import useFirebase from "../../../Firebase/useFirebase";
import "./Header.css";
//import { Link } from "react-router-dom";

const Header = () => {
  const { leLogout, user } = useFirebase();
  return (
    <div>
      <nav className="navbar navbar-expand-lg  navbar navbar-dark ">
        <div className="container-fluid">
          <a className="navbar-brand" href="/home">
            {" "}
            <img src="" alt="" width="60" />{" "}
            <span className="text-success">PJ </span>Club
          </a>
          {/* {         
                   user.email &&
                   <p style={{marginLeft:"52%"}}>
                    <span className="me-2 text-primary">{user?.displayName}</span>
                    <img className="rounded-circle" width="30" height="30" src={user?.photoURL} alt="" />
                    
                   </p>
                } */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="/home">
                Home
              </a>
              <a className="nav-link active" href="/about">
                About
              </a>
              <a className="nav-link active" href="/facilities">
                Facilities
              </a>
              <a className="nav-link active" href="/gallery">
                Gallery
              </a>
              
              <a className="nav-link active" href="/contact">
                Contact Us
              </a>
              {user?.email ? (
                <>
                  
                  {/* <a className="nav-link active" href="/pending">
                    Pending
                  </a> */}
                  <a className="nav-link active" href="/dashbaord">
                    DashBoard
                  </a>
                  <button className=" btn btn-danger float-end" onClick={leLogout} >LogOut <i class="fas fa-sign-out-alt"></i></button>
                </>
              ) : (
                <>
                  <a className="nav-link" href="/login">
                    Login
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
