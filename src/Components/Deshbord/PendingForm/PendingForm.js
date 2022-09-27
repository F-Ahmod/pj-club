import React, { useEffect, useState } from "react";
import useFirebase from "../../../Firebase/useFirebase";

const PendingForm = () => {
  const [msg, setMsg] = useState("");
  const [pendingForm, setPendingForm] = useState([]);
  const { handleUserRegister } = useFirebase();
  useEffect(() => {
    fetch("http://localhost:5000/register")
      .then((data) => data.json())
      .then((res) => setPendingForm(res));
  }, [msg]);
  const deleteForm = async (id) => {
    await fetch(`http://localhost:5000/form/${id}`, {
      method: "DELETE",
    }).then(() => {});
    console.log(id);
  };
  const handelapproveForm = async (data) => {
    handleUserRegister(data.email, data.password);
    await deleteForm(data._id);
    setMsg("user register sucess");
    setPendingForm((form) => form.filter((id) => id._id !== data._id));
  };
  const handelCancleForm = async (data) => {
    await deleteForm(data._id);
    setMsg("user delete sucess");
  };

  return (
    <div>
      {msg && (
        <div class="alert alert-success" role="alert">
          {msg}
        </div>
      )}
      {pendingForm.map((form) => (
        <div>
          <p>Name: {form.Name}</p>
          
          <p>Email: {form.email}</p>
          <button
            className="btn btn-success"
            onClick={() => handelapproveForm(form)}
          >
            Approve
          </button>
          <button
            className="btn btn-danger"
            onClick={() => handelCancleForm(form)}
          >
            Cancel
          </button>
        </div>
      ))}
    </div>
  );
};

export default PendingForm;
