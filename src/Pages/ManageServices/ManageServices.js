import React, { useEffect, useState } from "react";
import useServices from "../../hooks/useServices";

const ManageServices = () => {
  const [services, setServices] = useServices();

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure to delete?");
    if (proceed) {
      const url = `http://localhost:5000/service/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = services.filter((service) => service._id !== id);
          setServices(remaining);
        });
    }
  };

  return (
    <div className="container my-5">
      <h2>Manage Your Services</h2>
      {services.map((service) => (
        <div key={service._id}>
          <h5>
            {service.name}
            <button
              onClick={() => handleDelete(service._id)}
              className="btn btn-danger py-0 ms-2"
            >
              x
            </button>
          </h5>
        </div>
      ))}
    </div>
  );
};

export default ManageServices;
