import React, { useState } from 'react';
import { createUser } from './UserSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const AddUser = () => {
  const [name,setName] =useState("")
  const [email,setEmail] =useState("")
  const dispatch =useDispatch()
  const navigate =useNavigate()
  const handleCreateUser = (e) => {
    e.preventDefault();
    const newUser = {name,email};
    dispatch(createUser(newUser));
    navigate("/users" , {replace:true})
    console.log(newUser);
  };
  return (
    <div className="container mx-auto ">
      <h1 className="text-4xl my-10 text-center ">Add Book</h1>
      <form onSubmit={handleCreateUser} className="bg-blue-300 w-2/5 mx-auto p-10">
        <div className="form-field">
          <label htmlFor="title">Name :  </label>
          <input
           type="text"
           name="title" 
           value={name} 
           onChange={(e) => setName(e.target.value)}
           required
           className="border w-full p-2 outline-none rounded"
           />
        </div>
        <div className="form-field my-5">
          <label htmlFor="">Email : </label>
          <input
           type="text"
           name="author" 
           value={email} 
           onChange={(e) => setEmail(e.target.value)}
           required
           className="border w-full p-2 outline-none rounded"

           />
        </div>

        <button type="submit" className="text-white bg-blue-600 px-5 py-2 rounded w-full">Add book</button>
      </form>
    </div>
  );
};

export default AddUser;