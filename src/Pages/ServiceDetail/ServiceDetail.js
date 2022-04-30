import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useServiceDetail from "../../hooks/useServiceDetail";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const [service] = useServiceDetail(serviceId);

  return (
    <div className="container mt-5 text-center">
      <h3>Service Details:</h3>
      <h5 className="mt-5">{service.name}</h5>
      <p>{service.description}</p>
      <h6>{service.price}</h6>
      <div className="w-100 mx-auto text-center my-4">
        <Link to={`/checkout/${serviceId}`}>
          <button className="btn btn-dark">Proceed Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetail;
