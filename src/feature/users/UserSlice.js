import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/users");
  return response.data;
});

export const createUser = createAsyncThunk("users/createUser", async user => {
  const response = await axios.post("https://jsonplaceholder.typicode.com/users", user);
  return response.data;
});

export const updateUser = createAsyncThunk("users/updateUser", async user => {
  const response = await axios.put(`https://jsonplaceholder.typicode.com/users/${user.id}`, user);
  return response.data;
});

export const deleteUser = createAsyncThunk("users/deleteUser", async userId => {
  await axios.delete(`https://jsonplaceholder.typicode.com/users/${userId}`);
  return userId;
});

const userSlice = createSlice({
  name: "users",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchUsers.pending, state => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        const updatedUser = action.payload;
        const index = state.data.findIndex(user => user.id === updatedUser.id);
        if (index !== -1) {
          state.data[index] = updatedUser;
        }
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        const userId = action.payload;
        state.data = state.data.filter(user => user.id !== userId);
      });
  },
});

export default userSlice.reducer;
