import { useParams, useLoaderData } from "react-router-dom";

const ToyDetails = () => {
  const { id } = useParams();
  const toys = useLoaderData();
  const toy = toys.find((item) => item.id == id);

  const {
    image,
    name,
    seller,
    seller_email,
    price,
    rating,
    quantity,
    description,
  } = toy;

  return (
    <div className="container p-2 md:w-[60%] mx-auto my-8">
      <div className="flex flex-col md:flex-row items-center gap-x-7">
        <img src={image} alt={name} className="w-64 h-64 mb-4" />
        <div className="flex flex-col">
          <h2 className="text-3xl font-bold mb-2">{name}</h2>
          <p className="text-gray-600 mb-2">Seller: {seller}</p>
          <p className="text-gray-600 mb-4">Seller Email: {seller_email}</p>
          <p className="text-lg mb-2">Price: ${price}</p>
          <p className="text-lg mb-2">Rating: {rating}/5</p>
          <p className="text-lg mb-2">Available Quantity: {quantity}</p>
          <p className="text-gray-800 mb-4">{description}</p>
          
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
