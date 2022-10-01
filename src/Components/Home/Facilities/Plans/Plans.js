import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router";
import useFirebase from "../../../../Firebase/useFirebase";

const Plans = ({ plan }) => {
  const [msg, setMsg] = useState("");
  const [date, setDate] = useState("");
  const { user } = useFirebase();
  const navigate = useNavigate();

  const { fee, benifits, title, image, _id } = plan;
  const handelBookPlan = (prop) => {
    if (!date) return;

    const data = {
      benifits: prop.benifits,
      title: prop.title,
      uid: user.uid,
      date,
      fee: prop.fee,
    };

    prop.uid = user.uid;

    fetch("http://localhost:5000/saveplan", {
      method: "POST", // or 'PUT'
      headers: {
        email: user.email,
        text: `http://localhost:3000/payment/${prop._id}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        setMsg("To confirm your booking please chack your email");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div>
      <Card style={{ hight: "350px" }} className="mb-3 me-3 ">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" className="p-1 h-25 rounded " src={image} />
          <Card.Body>
            <Card.Title>
              RS<span className="fs-3"> {fee}</span> / month
            </Card.Title>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              {benifits.map((benifit) => (
                <p class="cardd-content fs-6">{benifit}</p>
              ))}
            </Card.Text>

            <button
              onClick={() => navigate(`/bookplan/${_id}`)}
              type="button"
              class="cardd-btn  mt-2"
            >
              BOOK
            </button>
          </Card.Body>
        </Card>
      </Card>
    </div>
  );
};

export default Plans;
