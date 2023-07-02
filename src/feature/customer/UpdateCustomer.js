import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { updateCustomer } from "./CustomerSlice";

const UpdateCustomer = () => {
  const location = useLocation();
  // eslint-disable-next-line no-unused-vars
  const [id, setId] = useState(location.state.id);
  const [name, setName] = useState(location.state.name);
  const [email, setEmail] = useState(location.state.email);
  const [phone, setPhone] = useState(location.state.phone);
  const [website, setWebsite] = useState(location.state.website);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdateCustomer = e => {
    e.preventDefault();
    const updateUser ={ id, name, email, phone, website }
    dispatch(updateCustomer(updateUser));
    navigate("/", { replace: true });
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl text-center my-10">Update Customer Information</h1>
      <form onSubmit={handleUpdateCustomer} className="bg-indigo-400 w-2/5 mx-auto p-10">
        <div className="form-field">
          <label htmlFor="title">Name : </label>
          <input
            type="text"
            name="title"
            value={name}
            onChange={e => setName(e.target.value)}
            required
            className="border w-full p-2 outline-none rounded"
          />
        </div>
        <div className="form-field my-5">
          <label htmlFor="">Email : </label>
          <input
            type="email"
            name="author"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            className="border w-full p-2 outline-none rounded"
          />
        </div>
        <div className="form-field my-5">
          <label htmlFor="">Phone : </label>
          <input
            type="number"
            name="author"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            required
            className="border w-full p-2 outline-none rounded"
          />
        </div>
        <div className="form-field my-5">
          <label htmlFor="">Website : </label>
          <input
            type="text"
            name="author"
            value={website}
            onChange={e => setWebsite(e.target.value)}
            required
            className="border w-full p-2 outline-none rounded"
          />
        </div>

        <button
          type="submit"
          className="text-white
       bg-[#000] px-5 py-2 
       rounded w-full"
        >
          Update Customer
        </button>
      </form>
    </div>
  );
};

export default UpdateCustomer;
