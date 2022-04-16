import React from "react";
import { useNavigate } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { id, name, price, description, img } = service;
  const navigate = useNavigate();
  const navigateToServiceDetail = (id) => {
    navigate(`/service/${id}`);
  };

  return (
    <div className="service">
      <img src={img} className="card-img-top" alt="" />
      <h3 className="title">{name}</h3>
      <p className="description">{description}</p>
      <h4 className="price">{price}</h4>
      <button onClick={() => navigateToServiceDetail(id)}>Book: {name}</button>
    </div>
  );
};

export default Service;
