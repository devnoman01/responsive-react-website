import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddService = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = `https://safe-coast-26904.herokuapp.com/service`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        toast("New Service Added");
        console.log(result);
      });
  };

  return (
    <div className="container my-5">
      <div className="w-75 mx-auto">
        <h2 className="mb-4 text-center">Add a Service</h2>
        <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
          <input
            className="mb-3"
            placeholder="Name"
            {...register("name", { required: true, maxLength: 20 })}
          />
          <textarea
            className="mb-3"
            placeholder="Description"
            {...register("description")}
          />
          <input
            className="mb-3"
            placeholder="Price"
            type="number"
            {...register("price")}
          />
          <input
            className="mb-3"
            placeholder="Proto URL"
            type="text"
            {...register("img")}
          />
          <input type="submit" value="Add Service" />
        </form>
      </div>
    </div>
  );
};

export default AddService;
