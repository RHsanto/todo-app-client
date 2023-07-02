/* eslint-disable array-callback-return */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCustomer, fetchCustomer } from "../feature/customer/CustomerSlice";
import { Link } from "react-router-dom";

const CustomerTable = ({ searchCustomer }) => {
  const { data, isLoading, error } = useSelector((state) => state.customer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCustomer());
  }, [dispatch]);
  console.log(data);

  const handleDeleteCustomer = (id) => {
    dispatch(deleteCustomer(id));
  };

  return (
    <div>
      <div className="overflow-x-auto mb-20">
        {isLoading && <h2>Loading ...</h2>}
        {error && <h3 className="text-red-500">{error}</h3>}
        <table className="table border shadow-lg">
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
            {data &&
              data
                .filter((items) => {
                  if (searchCustomer === "") {
                    return items;
                  } else if (
                    items?.name.toLowerCase().includes(searchCustomer.toLowerCase()) ||
                    items?.email.toLowerCase().includes(searchCustomer.toLowerCase())
                  ) {
                    return items;
                  }
                })
                .map((customer, index) => {
                  const { _id, name, email, phone, website } = customer;
                  return (
                    <tr key={_id}>
                      <td>{index + 1}</td>
                      <td>
                        <div className="flex items-center space-x-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img src="https://picsum.photos/200" alt="Avatar Tailwind CSS Component" />
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
                        <Link to="/update" state={{ _id, name, email, phone, website }}>
                          <button className="btn btn-success btn-sm">edit</button>
                        </Link>
                        <button onClick={() => handleDeleteCustomer(_id)} className="btn btn-error btn-sm ml-5">
                          delete
                        </button>
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

export default CustomerTable;
