import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import CustomerTable from "../components/Table";


const Home = () => {
  const [searchCustomer, setSearchCustomer] = useState("");

  return (
    <div className="container mx-auto">
      <div className="my-20 bg-[#570DF8] py-5 flex justify-between items-end">
        <SearchBar setSearchCustomer={setSearchCustomer} />
        <div>
          <Link to="/add-customer">
            <button className="btn btn-neutral text-white mx-5">Add new customer</button>
          </Link>
        </div>
      </div>
      <CustomerTable searchCustomer={searchCustomer} />
    </div>
  );
};

export default Home;
