import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";
import axiosPrivate from "../../api/axiosPrivate";

const Order = () => {
  const [user] = useAuthState(auth);
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getOrders = async () => {
      const email = user.email;
      const url = `https://safe-coast-26904.herokuapp.com/order?email=${email}`;
      try {
        const { data } = await axiosPrivate.get(url);
        setOrders(data);
      } catch (error) {
        console.log(error.message);
        if (error.response.status === 403 || error.response.status === 401) {
          signOut(auth);
          navigate("/login");
        }
      }
    };
    getOrders();
  }, [user]);

  return (
    <div className="container my-4">
      <div className="w-50 mx-auto text-center">
        <h1 className="mb-4">Your Orders: {orders.length}</h1>
        {orders.map((order) => (
          <div key={order._id}>
            <p>
              {order.email} : {order.service}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Order;
