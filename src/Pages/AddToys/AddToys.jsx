import { useForm } from "react-hook-form";

const AddToy = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-bold text-[#555273] text-center mb-8">Add A Toy</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto px-2 md:px-0 md:grid gap-4 grid-cols-2">
        <div className="mb-4">
          <label htmlFor="image" className="block mb-2 text-[#65799b]">Picture URL of the toy</label>
          <input type="text" id="image" {...register("image")} className="border border-gray-400 p-2 w-full text-[#555273]" />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 text-[#65799b]">Name</label>
          <input type="text" id="name" {...register("name", { required: true })} className="border border-gray-400 p-2 w-full text-[#555273]" />
          {errors.name && <span className="text-red-500">This field is required</span>}
        </div>
        <div className="mb-4">
          <label htmlFor="seller" className="block mb-2 text-[#65799b]">Seller Name</label>
          <input type="text" id="seller" {...register("seller")} className="border border-gray-400 p-2 w-full text-[#555273]" />
        </div>
        <div className="mb-4">
          <label htmlFor="sellerEmail" className="block mb-2 text-[#65799b]">Seller Email</label>
          <input type="email" id="sellerEmail" {...register("seller_email")} className="border border-gray-400 p-2 w-full text-[#555273]" />
        </div>
        <div className="mb-4">
          <label htmlFor="subCategory" className="block mb-2 text-[#65799b]">Sub-category</label>
          <select id="subCategory" {...register("sub_category")} className="border border-gray-400 p-2 w-full text-[#555273]">
            <option value="Math Toys">Math Toys</option>
            <option value="Language Toys">Language Toys</option>
            <option value="Science Toys">Science Toys</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block mb-2 text-[#65799b]">Price</label>
          <input type="number" id="price" {...register("price")} className="border border-gray-400 p-2 w-full text-[#555273]" />
        </div>
        <div className="mb-4 ">
          <label htmlFor="rating" className="block mb-2 text-[#65799b]">Rating</label>
          <input type="number" id="rating" {...register("rating")} className="border border-gray-400 p-2 w-full text-[#555273]" />
        </div>
        <div className="mb-4">
          <label htmlFor="quantity" className="block mb-2 text-[#65799b]">Available Quantity</label>
          <input type="number" id="quantity" {...register("quantity")} className="border border-gray-400 p-2 w-full text-[#555273]" />
        </div>
        <div className="mb-4 col-span-2">
          <label htmlFor="description" className="block mb-2 text-[#65799b]">Detail Description</label>
          <textarea id="description" {...register("description")} className="border border-gray-400 p-2 w-full h-24 resize-none text-[#555273]"></textarea>
        </div>
        <div className="col-span-2 text-center">
          <button type="submit" className="btn font-bold hover:bg-[#65799b] w-full">Add Toy</button>
        </div>
      </form>
    </div>
  );
};

export default AddToy;