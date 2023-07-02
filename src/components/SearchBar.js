import React from "react";

const SearchBar = ({ setSearchCustomer }) => {
  return (
    <div className="form-control w-2/4 mx-10">
      <input
        onChange={(e) => {
          setSearchCustomer(e.target.value);
        }}
        type="text"
        placeholder="Search"
        className="input input-bordered w-24 md:w-auto"
      />
    </div>
  );
};

export default SearchBar;
