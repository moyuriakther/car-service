import { signOut } from "firebase/auth";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import axiosPrivate from "../../../api/axiosPrivate";
import auth from "../../../firebase.init";

const Order = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);
  const email = user.email;
  const navigate = useNavigate();
  useEffect(() => {
    axiosPrivate
      .get(`http://localhost:8080/order?email=${email}`)
      .then((res) => setOrders(res.data))
      .catch((err) => {
        console.log(err);
        if (err.response.status === 401 || err.response.status === 403) {
          signOut(auth);
          navigate("/login");
        }
      });
  }, [email, navigate]);
  return (
    <div className="w-50 mx-auto">
      <h1>Your total order:{orders.length}</h1>
      {orders.map((order) => (
        <div order={order._id}>
          <p>
            {order.email} -- {order.service}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Order;
