import { Button, Badge } from "react-bootstrap";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const AddFacility = () => {
  const { register, handleSubmit } = useForm();
  const [benifits, setBenifits] = useState([]);
  const [name, setName] = useState("");

  const handleAddBenfit = () => {
    if (!name) return;
    if (benifits.includes(name)) return;
    setBenifits((prev) => [...prev, name]);
  };

  const removeBenifit = (index) => {
    console.log("object");
    benifits.splice(index, 1);
    setBenifits((prev) => [...prev]);
  };

  const onSubmit = (data) => {
    if (benifits.length === 0) return;
    const facility = { ...data, benifits };
    console.log(facility);

    fetch("http://localhost:5000/addplans", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(facility),
    })
      .then((response) => response.json())
      .then((data) => {})
      .catch((error) => {});
  };

  return (
    <div style={{ width: "300px" }} className="rounded shadow-sm mt-5 mx-auto p-3 bg-light">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input-field"
          {...register("image", { required: true })}
          placeholder="Image Url"
        />
        <input
          className="input-field"
          {...register("title", { required: true })}
          placeholder="Title"
        />
        <input
          className="input-field"
          {...register("fee", { required: true })}
          placeholder="Price"
        />

        <div className="w-100 d-flex mt-2 flex-wrap gap-2">
          {benifits.map((benifit, i) => (
            <Badge
              key={benifit}
              className="d-block p-2 d-flex align-items-center"
              bg="secondary"
            >
              <h6>{benifit} </h6>
              <h6 className="ms-2 text-danger" onClick={() => removeBenifit(i)}>
                Cancel
              </h6>{" "}
            </Badge>
          ))}
        </div>
        <br />
        <div className="d-flex align-items-center">
          <input
            placeholder="Add benifits text"
            className="me-2 p-1 rounded border-0"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />

          <Button
            classsName=""
            onClick={handleAddBenfit}
            variant="bg-secondary buttom"
          >
            Add
          </Button>
        </div>

        <input className="mt-3 buttom" type="submit" />
      </form>
    </div>
  );
};

export default AddFacility;
