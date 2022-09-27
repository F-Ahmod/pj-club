import React, { useState } from "react";
import { Badge } from "react-bootstrap";
import { useForm } from "react-hook-form";

const AddFacility = () => {
  const [benifits, setBenifits] = useState([""]);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {};
  const addBenifit = (e) => {
    if (e.keyCode!==13)return;
  
    if (benifits?.includes( e.target.value)) return;
    setBenifits((benifit) => [...benifit,  e.target.value]);
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-5 ">
        <input
          className="w-50 mb-3 mt-3 h-3"
          {...register("title")}
          Placeholder="title"
        />
        <br />
        <input
          className="w-50 mb-3"
          {...register("img")}
          Placeholder="image URL"
        />
        <br />

        <input
          className="w-50 mb-3"
          type="text"
          {...register("price")}
          Placeholder="price"
        />
        <br />
        {benifits?.map((benifit) => (
          <Badge bg="primary">{benifit}</Badge>
        ))}
        <br />

        <input
          className="input-text w-50 mb-3"
        onKeyPress={e => addBenifit(e)}
          Placeholder="Write your text"
        />
        <br />
        <input
          className=""
          style={{ width: "140px", borderRadius: "10px" }}
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddFacility;
