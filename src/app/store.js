import { configureStore } from "@reduxjs/toolkit";
import booksReducer  from "../feature/books/BooksSlice";
import userSlice from "../feature/users/UserSlice";
import  customerSlice  from "../feature/customer/CustomerSlice";

const store = configureStore({
  reducer:{
    books: booksReducer,
    users:userSlice,
    customer:customerSlice
  }
})

export default store;