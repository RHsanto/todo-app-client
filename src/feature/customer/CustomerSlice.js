import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCustomer = createAsyncThunk("customer/fetchCustomer", async () => {
  const res = await axios.get("http://localhost:8000/users");
  return res.data;
});

export const createCustomer = createAsyncThunk("customer/createCustomer", async customer => {
  const res = await axios.post("http://localhost:8000/users", customer);
  return res.data;
});

export const updateCustomer = createAsyncThunk("customer/updateCustomer", async customer => {
  const res = await axios.put(
    `http://localhost:8000/users/${customer.id}`,
    customer
  );
  return res.data;
});

export const deleteCustomer = createAsyncThunk("customer/deleteCustomer", async customerId => {
  await axios.delete(`http://localhost:8000/users/${customerId}`);
  return customerId;
});

export const customerSlice = createSlice({
  name: "customer",
  initialState: {
    isLoading: false,
    data: [],
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCustomer.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchCustomer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchCustomer.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(createCustomer.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      .addCase(updateCustomer.fulfilled, (state, action) => {
        const updatedUser = action.payload;
        const index = state.data.findIndex(user => user._id === updatedUser._id);
        if (index !== -1) {
          state.data[index] = updatedUser;
        }
      })

      .addCase(deleteCustomer.fulfilled, (state, action) => {
        const customerId = action.payload;
        state.data = state.data.filter(state => state._id !== customerId);
      });
  },
});

export default customerSlice.reducer
