import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createCustomer } from './CustomerSlice';

const AddCustomer = () => {
  // const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addCustomer =(e)=>{
    e.preventDefault()
    const newUser = {name,email,phone,website}
    dispatch(createCustomer(newUser))
    navigate("/", { replace: true });
  }
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl text-center my-10">Update Customer Information</h1>
      <form onSubmit={addCustomer} className="bg-indigo-400 w-2/5 mx-auto p-10">
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

export default AddCustomer;