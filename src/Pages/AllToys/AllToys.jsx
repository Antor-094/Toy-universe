import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate()
  const {user} = useContext(AuthContext)
  const IsUserLoggedIn=(id)=>{
    if(user){
      navigate(`/toy/${id}`)
    }else{
      Swal.fire({
        icon: "error",
        text: "You have to login first",
      });
      navigate(`/toy/${id}`);
    }
    }
  useEffect(() => {
    fetch("category.json")
      .then((response) => response.json())
      .then((data) => setToys(data))
      .catch((error) => console.log(error));
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredToys = toys.filter((toy) =>
    toy.name.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <div className="container my-12 mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8">All Toys</h1>
      <div className="overflow-x-auto">
        <div className="mb-4">
          <label htmlFor="search" className="mr-2">
            Search:
          </label>
          <input
            type="text"
            id="search"
            value={searchTerm}
            onChange={handleSearch}
            className="px-2 py-1 border border-gray-300 rounded"
          />
        </div>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b bg-[#65799b] text-white">Seller</th>
              <th className="py-2 px-4 border-b bg-[#65799b] text-white">Toy Name</th>
              <th className="py-2 px-4 border-b bg-[#65799b] text-white">Sub-category</th>
              <th className="py-2 px-4 border-b bg-[#65799b] text-white">Price</th>
              <th className="py-2 px-4 border-b bg-[#65799b] text-white">Available Quantity</th>
              <th className="py-2 px-4 border-b bg-[#65799b] text-white"></th>
            </tr>
          </thead>
          <tbody>
            {filteredToys.map((toy) => (
              <tr className="text-center" key={toy.id}>
                <td className="py-2 px-4 border-b">{toy.seller}</td>
                <td className="py-2 px-4 border-b">{toy.name}</td>
                <td className="py-2 px-4 border-b">{toy.category}</td>
                <td className="py-2 px-4 border-b">{toy.price}</td>
                <td className="py-2 px-4 border-b">{toy.quantity}</td>
                <td className="py-2 px-4 border-b">
                  <button onClick={()=>IsUserLoggedIn(toy.id)} className="text-blue-500 font-medium">
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
