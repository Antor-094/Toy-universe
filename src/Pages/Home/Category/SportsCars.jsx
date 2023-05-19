import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
const SportsCars = ({ toy }) => {
  return (
    <div>
      <div className="card md:w-[350px]  border border-[#65799b] py-4 bglate-100 text-neutral font-serif shadow-lg rounded-lg">
        <figure className="px-2 pt-2">
          <img
            src={toy.image}
            alt=""
            className="rounded-t-lg h-48 w-full object-cover"
          />
        </figure>
        <div className="card-body px-4 py-2">
          <h2 className="card-title font-bold text-[#65799b] text-lg mb2">
            {toy.name}
          </h2>
          <p className="font-medium text-[#65799b] mb-2">Price: ${toy.price}</p>
          <p className="font-medium text-[#65799b] flex items-center mb-2">
            Rating:{" "}
            <Rating style={{ maxWidth: 100 }} value={toy.rating} readOnly />
          </p>
          <div className="card-actions flex justify-end">
            <button className="btn btn-outline normal-case text-[#65799b] hover:bg-[#65799b] hover:text-white transition-colors duration-300">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportsCars;