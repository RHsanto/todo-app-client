import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBook, fetchUsers } from "./BooksSlice";
import { Link } from "react-router-dom";

const BooksView = () => {
  const {user} = useSelector(state => state.books);
  const dispatch = useDispatch();
  const handleDeleteBook = id => {
    dispatch(deleteBook(id));
  };

  useEffect(()=>{
    dispatch(fetchUsers())
  })
  return (
    <div className="container mx-auto">
      <h1 className="text-center text-4xl p-10 ">Lists of Books</h1>
    <div className="grid grid-cols-3">
        {user.map(book => {
          const { id, name, email } = book;
          return (
            <div key={id} className="border m-5 p-5">
              <h1 className="text-3xl">{name}</h1>
              <h2 className="text-xl">{email}</h2>
              <div className="flex mt-6">
                <Link to="/edit-book" state={{ id, email, name }}>
                  <button
                    className="bg-green-600 px-6 py-2 rounded text-white"
                  >
                    Edit
                  </button>
                </Link>
                <button
                  className="bg-red-600 px-6 py-2  rounded text-white ml-10"
                  onClick={() => {
                    handleDeleteBook(id);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BooksView;
