import React from "react";
import { useForm } from "react-hook-form";
import "./MakeAdmin.css";
const MakeAdmin = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    fetch("http://localhost:5000/makeAdmin", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
    console.log(data);
  };
  return (
    <div className="mt-5">
      {/* <h5 className="mt-3">make admin</h5> */}
      <form onSubmit={handleSubmit(onSubmit)} className=" d-flex">
        <input
          className="makeAdminBottom w-25"
          name="email"
          placeholder="Email"
          type="email"
          {...register("email", { required: true })}
        />
     

        <input
          className="bott "
          type="submit"
          value="Make as Admin"
        />
      </form>
    </div>
  );
};

export default MakeAdmin;
