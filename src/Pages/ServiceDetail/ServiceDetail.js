import React from "react";
import { Link, useParams } from "react-router-dom";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  return (
    <div>
      <h3>Service Details: {serviceId}</h3>
      <Link to="/checkout">
        <button className="btn btn-dark">Proceed Checkout</button>
      </Link>
    </div>
  );
};

export default ServiceDetail;
