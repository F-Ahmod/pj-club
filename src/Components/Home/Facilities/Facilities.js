import React, { useEffect, useState } from "react";
import Spinner from 'react-bootstrap/Spinner';
//import img from "../images/images (10).jpg"
import "./Facilities.css";
import Plans from "./Plans/Plans";
const Facilities = () => {
  const [loding, setLoding]=useState(false)
  const [plans, setPlans]=useState([]);
  
  useEffect(() => {
    setLoding(true)
    fetch('http://localhost:5000/plans')
    .then(data=>data.json())
    .then(res=>{
      setPlans(res)
      setLoding(false)
    })
  }, [])
  return (
    
    <div>
      
      <h1 className="h1 fs-3 text-center">Add Bike</h1>
      {
        loding && <h3 className="text-center mt-5">Loading...</h3>
      }
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
