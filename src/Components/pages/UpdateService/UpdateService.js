import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

const UpdateService = () => {
  const { id } = useParams();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    axios
      .put(`https://car-service-backend.onrender.com/service/${id}`, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "JWT fefege...",
        },
      })
      .then((res) => {
        console.log(res.data);
        alert("User Updated Successfully");
        // data.target.reset();
      })
      .catch((error) => console.log(error));
    console.log(data);
  };
  return (
    <div className="w-50 mx-auto my-3">
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Name"
          {...register("name", { required: true, maxLength: 20 })}
        />
        <textarea
          className="mt-2"
          placeholder="Description"
          {...register("description")}
        />
        <input
          className="mt-2"
          placeholder="Price"
          type="number"
          {...register("price")}
        />
        <input
          className="mt-2"
          placeholder="Photo URL"
          type="text"
          {...register("img")}
        />
        <input className="mt-2" type="Submit" value="Add Service" />
      </form>
    </div>
  );
};

export default UpdateService;
