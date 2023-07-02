import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "./BooksSlice";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const dispatch =useDispatch()
  const navigate =useNavigate()
  // const noOfBooks= useSelector((state)=>state.booksReducer.books.length)
  const handleSubmit=(e)=>{
   e.preventDefault();
   const book={title, author};
   dispatch(addBook(book))
   navigate("/show-books" , {replace:true})
  }
  return (
    <div className="container mx-auto ">
      <h1 className="text-4xl my-10 text-center ">Add Book</h1>
      <form onSubmit={handleSubmit} className="bg-blue-300 w-2/5 mx-auto p-10">
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

        <button type="submit" className="text-white bg-blue-600 px-5 py-2 rounded w-full">Add book</button>
      </form>
    </div>
  );
};

export default AddBook;
