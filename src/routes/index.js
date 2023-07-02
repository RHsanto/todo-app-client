import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../page/Home';
import Error from '../page/Error';
import Navbar from '../layout/Navbar';
import BooksView from '../feature/books/BooksView';
import AddBook from '../feature/books/AddBook';
import EditBook from '../feature/books/EditBook';
import UserList from '../feature/users/UserView';
import AddUser from '../feature/users/AddUser';
import EditUser from '../feature/users/EditUser';
import UpdateCustomer from '../feature/customer/UpdateCustomer';
import AddCustomer from '../feature/customer/AddCustomer';

const Index = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="*" element={<Error/>} />
      <Route path="/show-books" element={<BooksView/>} />
      <Route path="/add-books" element={<AddBook/>} />
      <Route path="/edit-book" element={<EditBook/>} />
      <Route path="/users" element={<UserList/>} />
      <Route path="/add-user" element={<AddUser/>} />
      <Route path="/edit-user" element={<EditUser/>} />
      <Route path="/update" element={<UpdateCustomer/>} />
      <Route path="/add-customer" element={<AddCustomer/>} />
    </Routes>
    </BrowserRouter>
  );
};

export default Index;