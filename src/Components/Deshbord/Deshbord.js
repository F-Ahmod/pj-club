import React, { useEffect, useState } from "react";

import { Link, Outlet } from "react-router-dom";
import useFirebase from "../../Firebase/useFirebase";

import "./Dashbord.css";

const Dashbord = () => {
  const { admin, user } = useFirebase();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch(user?.email)
      .then((res) => res.json())
      .then((data) => {
        if (data[0]?.role === "admin") {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
      });
  }, [user?.email]);

  return (
    <div className="row">
      <div class="col-md-3">
        <nav class="menu" tabindex="0">
          <div class="smartphone-menu-trigger"></div>
          <header class="avatar">
            <img
              src={user?.image}
              alt=""
            />
            <h4 className="mt-2">Fateh Ahmod.</h4>
          </header>
          <ul className="dashboard_nav">
            
            <li tabindex="0" class="icon-customers">
              {" "}
              <Link to="/facilities">
                <span>Facilities</span>
              </Link>
            </li>
            <li tabindex="0" class="icon-customers">
              {" "}
              <Link to="/pending">
                <span>Pandding form</span>
              </Link>
            </li>

            <li tabindex="0" class="icon-users">
              {" "}
              <Link to="/makeadmin">
                <span>Make Admin</span>
              </Link>
            </li>

            <li tabindex="0" class="icon-users">
              {" "}
              <Link to="/addFacility">
                <span>Add Facility</span>
              </Link>
            </li>

            {/* <li tabindex="0" class="icon-users"><span>Users</span></li>
    
    
    <li tabindex="0" class="icon-settings"><span>Settings</span></li> */}
          </ul>
        </nav>
        {/* <ul class="sidebar-list">
          <li class="sidebar-list-item">
            <Link href="/">
              <span>Home</span>
            </Link>
          </li>
          <li class="sidebar-list-item">
            <Link to="/dashbaord/facilities">
              <span>Facilities</span>
            </Link>
          </li>

          <div className="">
            <li class="sidebar-list-item">
              <Link to="/dashbaord/pending">
                <span>Pandding form</span>
              </Link>
            </li>

            <li class="sidebar-list-item">
              <Link to="/dashbaord/addFacility">
                <span>Add Facility</span>
              </Link>
            </li>
            <li class="sidebar-list-item">
              <Link to="/dashbaord/makeadmin">
                <span>Make Admin</span>
              </Link>
            </li>
          </div>
        </ul> */}
      </div>
      <div class="col-md-9">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashbord;
