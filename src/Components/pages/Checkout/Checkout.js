import React from "react";
import { useParams } from "react-router-dom";
import useServiceDetail from "../../../hooks/useServiceDetail";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import axios from "axios";

const Checkout = () => {
  const { serviceId } = useParams();
  const [service] = useServiceDetail(serviceId);
  const [user] = useAuthState(auth);
  const handleOrderSubmit = (e) => {
    e.preventDefault();
    // const email = e.target.email.value;
    const address = e.target.address.value;
    const phone = e.target.phone.value;
    const order = {
      email: user.email,
      address,
      phone,
      name: user.displayName,
      service: service.name,
      price: service.price,
      serviceId,
    };
    console.log(user, order);
    axios
      .post("https://car-service-backend.onrender.com/order", order)
      .then((res) => {
        const data = res.data;
        if (data.insertedId) {
          toast("Order Placed successfully");
          e.target.reset();
        }
      })
      .catch((err) => toast("Something Went wrong"));
  };

  return (
    <div className="w-50 mx-auto my-5">
      <PageTitle title={"checkout"} />
      <h4>Please Checkout for: {service?.name}</h4>
      <form onSubmit={handleOrderSubmit}>
        <input
          className="w-100 mb-2"
          type="text"
          name="name"
          placeholder="name"
          value={user?.displayName}
          required
          readOnly
          disabled
        />
        <input
          className="w-100 mb-2"
          type="text"
          name="email"
          value={user?.email}
          placeholder="email"
          required
          readOnly
          disabled
        />
        <input
          className="w-100 mb-2"
          type="text"
          name="service"
          value={service?.name}
          placeholder="service"
          required
          readOnly
          disabled
        />
        <input
          className="w-100 mb-2"
          type="text"
          name="address"
          placeholder="address"
          required
        />
        <input
          className="w-100 mb-2"
          type="text"
          name="phone"
          placeholder="phone"
          required
        />
        <input
          className="w-100 mb-2"
          type="submit"
          value="Book Service"
          required
        />
      </form>
    </div>
  );
};

export default Checkout;
