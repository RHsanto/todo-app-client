import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// const initialBooks = {
//   books: [
//     { id: 1, title: "Love Bangladesh", author: "RHsanto" },
//     { id: 2, title: "Love Philistine", author: "Santo" },
//     { id: 3, title: "Terrist Israile", author: "RHSanto" },
//   ],
// };
export const fetchUsers = createAsyncThunk("blogs/fetchBlogs", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return data;
});

export const booksSlice = createSlice({
  name: "books",
  initialState: {
    isLoading: false,
    user: [],
    error: null,
  },
  reducers: {
    addBook: (state, action) => {
      state.user.push(action.payload);
    },
    deleteBook: (state, action) => {
      state.user = state?.user?.filter(blog => blog?.id !== action.payload);
    },
    updateBook: (state, action) => {
      const { id, title, author } = action.payload;
      const isBooksExist = state.user.filter(book => book.id === id);
      if (isBooksExist) {
        isBooksExist[0].title = title;
        isBooksExist[0].author = author;
      }
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchUsers.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.isLoading = true;
      state.user = action.payload;
      state.error = null;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.user = [];
      state.error = action.payload;
    });
  },
});

export const { addBook, deleteBook, updateBook } = booksSlice.actions;
export default booksSlice.reducer;
