import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
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
       <h5 class="mt-3 mb-2">Regestration request</h5>
      {msg && (
        <div class="alert alert-success" role="alert">
          {msg}
        </div>
      )}

      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {pendingForm.map((form) => (
            <tr>
              <td>{form.Name}</td>
              <td>{form.email}</td>
              <td>
                <button
                  class="product-cell stock btn btn-success me-2"
                  onClick={() => handelapproveForm(form)}
                >
                  <span class="cell-label"></span>Approve
                </button>
              </td>
              <td>
                <button
                  class="product-cell stock btn btn-danger"
                  onClick={() => handelCancleForm(form)}
                >
                  <span class="cell-label"></span>Cancel
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default PendingForm;
