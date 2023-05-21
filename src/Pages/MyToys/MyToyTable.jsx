import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const MyToyTable = ({ car, handleDelete }) => {
    const {_id,seller ,name ,quantity,category,price,image} = car
  return (
    <tr className="text-center" key={_id}>
      <td className="py-2 px-4 border-b">{seller}</td>
      <td className="py-2 px-4 border-b">{name}</td>
      <td className="py-2 px-4 border-b">{category}</td>
      <td className="py-2 px-4 border-b">{price}</td>
      <td className="py-2 px-4 border-b">{quantity}</td>
      <td className="py-2 px-4 border-b">
        <img className="w-14 h-14" src={image} alt="" />
      </td>
      <td className="py-2 px-4 border-b">
        <button onClick={()=>handleDelete(_id)} className="py-2 px-3 text-white font-bold rounded-sm hover:bg-[#555273] bg-[#1F2937] border-b">
          <FaTrashAlt></FaTrashAlt>
        </button>
      </td>
      <td className="py-2 px-4 border-b">
        <Link to={`/updateToy/${_id}`}>
        <button className="py-2 px-3 text-white font-semibold rounded-sm hover:bg-[#555273] bg-[#1F2937]  border-b">
          update
        </button>
        </Link>
      </td>
    </tr>
  );
};

export default MyToyTable;
