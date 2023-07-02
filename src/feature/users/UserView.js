import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, fetchUsers } from "./UserSlice";
import { Link } from "react-router-dom";

const UserList = () => {
  const dispatch = useDispatch();
  const { data, error, loading } = useSelector(state => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleDeleteUser = userId => {
    dispatch(deleteUser(userId));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mx-auto pt-10">
      <div className="grid grid-cols-4">
        {data.map(user => {
          const { id, name, email } = user;
          return (
            <div key={id} className="border p-10 m-16">
              <h3>{name}</h3>
              <h4>{email}</h4>

              <br />
              <button
                className="text-white mr-4 mt-5 bg-red-600  p-2 rounded"
                onClick={() => handleDeleteUser(id)}
              >
                Delete
              </button>
              <Link to="/edit-user" state={{ id, name, email }}>
                <button className="text-white   bg-blue-600  p-2 rounded">Edit User</button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserList;
