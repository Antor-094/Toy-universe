

import { useForm } from "react-hook-form";
import useTitle from "../../Hooks/useTitle";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

// import Swal from "sweetalert2";

const UpdateToy = () => {
    const car = useLoaderData()
    const {_id,quantity,price,description} = car
    // console.log(_id,quantity,price,description)
    useTitle('AddToy')
    
    // console.log(user.displayName)
  const { register, handleSubmit, formState: { errors } } = useForm();
 

  const priceValidation = (value) => {
    const parsedValue = parseFloat(value);
    if (isNaN(parsedValue)) {
      return "Please enter a valid price";
    }
    if (parsedValue < 5 || parsedValue > 100) {
      return "Price must be between 5 and 100";
    }
    return true;
  };
  const onSubmit = (data) => {
    console.log(data);
    fetch(`http://localhost:5000/allToys/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Toy Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    
  };

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-bold text-[#555273] text-center mb-8">Update Toy</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto px-2 md:px-0 md:grid gap-4 grid-cols-2">
           
        
        <div className="mb-4">
          <label htmlFor="price" className="block mb-2 text-[#65799b]">Price</label>
          <input type="text" defaultValue={price} id="price" {...register("price", { required: true, validate: priceValidation })} className="border border-gray-400 p-2 w-full text-[#555273]" />
          {errors.price && <span className="text-red-500">{errors.price.message}</span>}
        </div>
        
        <div className="mb-4">
          <label htmlFor="quantity" className="block mb-2 text-[#65799b]">Available Quantity</label>
          <input type="number" defaultValue={quantity} id="quantity" {...register("quantity")} className="border border-gray-400 p-2 w-full text-[#555273]" />
        </div>
        <div className="mb-4 col-span-2">
          <label htmlFor="description" className="block mb-2 text-[#65799b]">Detail Description</label>
          <textarea defaultValue={description} id="description" {...register("description")} className="border border-gray-400 p-2 w-full h-24 resize-none text-[#555273]"></textarea>
        </div>
        <div className="col-span-2 text-center">
          <button type="submit" className="btn font-bold hover:bg-[#65799b] w-full">Update Toy</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateToy;