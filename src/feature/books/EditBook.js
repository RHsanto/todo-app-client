/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { updateBook } from './BooksSlice';

const EditBook = () => {
  const location = useLocation()
  const [id,setId]=useState(location.state.id)
  const [title,setTitle]=useState(location.state.title)
  const [author,setAuthor]=useState(location.state.author)
  const dispatch=useDispatch();
  const navigate = useNavigate()
  const handleUpdateBook=(e)=>{
    e.preventDefault();
    dispatch(updateBook( {id,title,author} ));
    navigate("/show-books", {replace:true})
  }
  return (
    <div className='container mx-auto'>
      <h1 className='text-4xl '>EditBook</h1>
      <form  onSubmit={handleUpdateBook} className="bg-blue-300 w-2/5 mx-auto p-10">
        <div className="form-field">
          <label htmlFor="title">Title :  </label>
          <input
           type="text"
           name="title" 
           value={title} 
           onChange={(e) => setTitle(e.target.value)}
           required
           className="border w-full p-2 outline-none rounded"
           />
        </div>
        <div className="form-field my-5">
          <label htmlFor="">Author : </label>
          <input
           type="text"
           name="author" 
           value={author} 
           onChange={(e) => setAuthor(e.target.value)}
           required
           className="border w-full p-2 outline-none rounded"

           />
        </div>

        <button type="submit" 
        className="text-white
         bg-blue-600 px-5 py-2 
         rounded w-full">Update book</button>
      </form>
    </div>
  );
};

export default EditBook;