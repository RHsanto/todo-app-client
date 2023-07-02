/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCustomer, fetchCustomer } from "../feature/customer/CustomerSlice";
import { Link } from "react-router-dom";

const Table = () => {
  const [searchCustomer, setSearchCustomer]=useState("")
  const { data, isLoading, error } = useSelector(state => state.customer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCustomer());
  }, [dispatch]);

  const handleDeleteCustomer = (id)=>{
    dispatch(deleteCustomer(id))
  }


  return (
    <div>
      {/* search bar with add button */}
      <div className="my-20 bg-[#570DF8] py-5 flex justify-between items-end">
        <div className="form-control w-2/4 mx-10">
          <input onChange={(e)=>{setSearchCustomer(e.target.value)}} type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
        </div>
        <div>
          <Link to='/add-customer'>  
          <button className="btn btn-neutral text-white mx-5">Add new customer</button>
          </Link>
         
        </div>
      </div>
      <div className="overflow-x-auto mb-20">
        {isLoading && <h2>Loading ...</h2>}
        {error && <h3 className="text-red-500">{error}</h3>}
        <table className="table border  shadow-lg">
          {/* head */}
          <thead className="bg-gray-200 text-black ">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Website</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {data &&
             data
             .filter(items => {
               if (searchCustomer === "") {
                 return items;
               } else if (
                 items?.name.toLowerCase().includes(searchCustomer.toLowerCase()) ||
                 items?.email.toLowerCase().includes(searchCustomer.toLowerCase())
               ) {
                 return items;
               }
             })
              .map((customer,index )=> {
                const { id, name, email, phone, website } = customer;
                return (
                  <tr key={id}>
                    <td>{index + 1}</td>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src="https://picsum.photos/200"
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{name}</div>
                          <div className="text-sm opacity-50">{email}</div>
                        </div>
                      </div>
                    </td>
                    <td>{phone}</td>
                    <td>{website}</td>
                    <th>
                      <Link to='/update' state={{id, name, email, phone, website }}>
                      <button   className="btn btn-success btn-sm">edit</button>
                      </Link>
                      <button onClick={()=>{handleDeleteCustomer(id)}} className="btn btn-error btn-sm ml-5">delete</button>
                    </th>
                  </tr>
                );
              })}

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
