import { useContext, useEffect, useState } from "react";
import useTitle from "../../Hooks/useTitle";
import { AuthContext } from "../../Provider/AuthProvider";
import MyToyTable from "./MyToyTable";
import Swal from "sweetalert2";

const MyToys = () => {
  useTitle("MyToy");
  const { user } = useContext(AuthContext);
  const [myCars, setMyCars] = useState([]);
  const [sortingOrder, setSortingOrder] = useState("ascending"); // State for sorting order

  useEffect(() => {
    const url = `https://toy-universe-server-liart.vercel.app/allToy?email=${user?.email}&sortingOrder=${sortingOrder}`; // Include sortingOrder in the URL
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMyCars(data);
        console.log(data);
      });
  }, [user?.email, sortingOrder]); // Include sortingOrder as a dependency

  const handleDelete = (id) => {
    const proceed = confirm('Are you sure you want to delete?');
    if (proceed) {
      fetch(`https://toy-universe-server-liart.vercel.app/allToys/${id}`, {
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.deletedCount > 0) {
          Swal.fire({
            title: 'Success!',
            text: 'Toy deleted successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          });
          const remaining = myCars.filter(cars => cars._id !== id);
          setMyCars(remaining);
        }
      });
    }
  };

  const handleSortingOrderChange = (event) => {
    const selectedSortingOrder = event.target.value;
    setSortingOrder(selectedSortingOrder);
  };

  return (
    <div className="overflow-x-auto">
      <div className="sorting-container my-2  px-2 py-2">
        <label htmlFor="sortingOrder" className="font-semibold">Sorting Order:</label>
        <select
          id="sortingOrder"
          value={sortingOrder}
          onChange={handleSortingOrderChange}
        >
          <option value="ascending" className="text-[#65799b]">Ascending</option>
          <option value="descending" className="text-[#65799b]">Descending</option>
        </select>
      </div>
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



  