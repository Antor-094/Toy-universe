// import React from 'react';

import { useContext, useEffect, useState } from "react";
import useTitle from "../../Hooks/useTitle";
import { AuthContext } from "../../Provider/AuthProvider";
import MyToyTable from "./MyToyTable";
import Swal from "sweetalert2";

const MyToys = () => {
  useTitle("MyToy");
  const { user } = useContext(AuthContext);
  const [myCars, setMyCars] = useState([]);
  console.log(user)
//   const url = ;
  useEffect(() => {
    fetch(`http://localhost:5000/allToy?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyCars(data);
        console.log(data);
      });
  }, [user?.email]);
  const handleDelete = id => {
    const proceed = confirm('Are You sure you want to delete');
    if (proceed) {
        fetch(`http://localhost:5000/allToys/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'toy deleted Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                    const remaining = myCars.filter(cars => cars._id !== id);
                    setMyCars(remaining);
                }
            })
    }
    
}
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b bg-[#65799b] text-white">
              Seller
            </th>
            <th className="py-2 px-4 border-b bg-[#65799b] text-white">
              Toy Name
            </th>
            <th className="py-2 px-4 border-b bg-[#65799b] text-white">
              Sub-category
            </th>
            <th className="py-2 px-4 border-b bg-[#65799b] text-white">
              Price
            </th>
            <th className="py-2 px-4 border-b bg-[#65799b] text-white">
              Available Quantity
            </th>
            <th className="py-2 px-4 border-b bg-[#65799b] text-white">
              Image
            </th>
            <th className="py-2 px-4 border-b bg-[#65799b] text-white">
            
            </th>
            <th className="py-2 px-4 border-b bg-[#65799b] text-white">
              
            </th>
          </tr>
        </thead>
        <tbody>
          {myCars.map((car) =><MyToyTable key={car._id} car={car} handleDelete={handleDelete} ></MyToyTable> )}
        </tbody>
      </table>
    </div>
  );
};

export default MyToys;
