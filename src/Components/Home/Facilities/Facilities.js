import React, { useEffect, useState } from "react";
//import img from "../images/images (10).jpg"
import "./Facilities.css";
import Plans from "./Plans/Plans";
const Facilities = () => {
  const [plans, setPlans]=useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/plans')
    .then(data=>data.json())
    .then(res=>setPlans(res))
  }, [])
  return (
    <div>
      
      <h1 className="h1 fs-3">Our Facilities</h1>
      <div class="wrapper">
      {
                plans.map(plan => <Plans
                plan={plan}></Plans>)
            }
      </div>
      
    </div>
  );
};

export default Facilities;
