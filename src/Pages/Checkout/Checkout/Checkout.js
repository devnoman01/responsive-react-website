import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useServiceDetail from "../../../hooks/useServiceDetail";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import axios from "axios";
import { toast } from "react-toastify";

const Checkout = () => {
  const { serviceId } = useParams();
  const [service] = useServiceDetail(serviceId);

  const [user] = useAuthState(auth);
  if (user) {
    console.log(user);
  }

  // const [user, setUser] = useState({
  //   name: "Akbar Hossen",
  //   email: "akbar@gmail.com",
  //   address: "D.T Road, AK Khan Circle, CTG.",
  //   phone: "01234567890",
  // });

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    const order = {
      email: user.email,
      service: service.name,
      serviceId: serviceId,
      address: e.target.address.value,
      phone: e.target.phone.value,
    };
    axios
      .post("https://safe-coast-26904.herokuapp.com/order", order)
      .then((response) => {
        const { data } = response;
        if (data.insertedId) {
          toast("Order Booked!");
          e.target.reset();
        }
      });
  };

  return (
    <div className="container my-5">
      <div className="w-50 text-center mx-auto">
        <h2>Confirm your booking</h2>
        <br />
        <h4>Service: {service.name}</h4>
        <form onSubmit={handlePlaceOrder} className="my-3 p-4 border">
          <input
            className="w-100 mb-3"
            type="text"
            name="service"
            value={service.name}
            disabled
          />
          <br />
          <input
            className="w-100 mb-3"
            type="text"
            name="name"
            value={user.displayName}
            placeholder="name"
            required
            readOnly
          />
          <br />
          <input
            className="w-100 mb-3"
            type="text"
            name="email"
            value={user.email}
            placeholder="email"
            required
            readOnly
          />
          <br />
          <input
            className="w-100 mb-3"
            type="text"
            name="address"
            placeholder="address"
            required
          />
          <br />
          <input
            className="w-100 mb-3"
            type="text"
            name="phone"
            value={user.phone}
            placeholder="phone"
            required
          />
          <br />
          <input
            className="btn btn-success"
            type="submit"
            value="Confirm Order"
          />
        </form>
      </div>
    </div>
  );
};

export default Checkout;
