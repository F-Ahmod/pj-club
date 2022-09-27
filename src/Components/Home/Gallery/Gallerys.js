import React from "react";

const Gallerys = ({gallery}) => {
const { img, name } = gallery;
console.log(name);

  return (
    <div className="">
      <div className="card  mb-2 img-bg " data-aos="fade-up">
        <img
          style={{ height: "270px", width: "100%" }}
          src={img}
          className=" shadow rounded"
          alt="..."
        />
        {/* <div className="card-body">
          <h5 className="card-title text-dark">{name}</h5>
        </div> */}
      </div>
    </div>
  );
};

export default Gallerys;
