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
      <div class="col-md-3 mt-5">
        <ul class="sidebar-list">
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

          {admin === "admin" && (
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
          )}
        </ul>
      </div>
      <div class="col-md-9">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashbord;
