
import React from "react";
//import axios from "axios";
import useFirebase from "../../../../Firebase/useFirebase";

const Plans = ({ plan }) => {
    const {user}=useFirebase();

  const { fee, benifits, title } = plan;
  const handelBookPlan=(prop)=>{
    console.log(prop);
    prop.uid=user.uid
console.log(fee);
fetch('http://localhost:5000/saveplan', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(prop),
})
  .then((response) => response.json())
  .then((data) => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });

  }
  return (
    <div>
      <div class="cardd">
        <h3 class="cardd-title">{title}</h3>
        <p>
          <span className="fs-3">RS {fee}</span> / month
        </p>
        {
            benifits.map(benifit=><p class="cardd-content fs-6">{benifit}</p>)
        }
        <button class="cardd-btn mt-2" onClick={()=>handelBookPlan(plan)}>READ MORE</button>
      </div>
    </div>
  );
};

export default Plans;
