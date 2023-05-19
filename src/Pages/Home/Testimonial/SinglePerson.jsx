// import React from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const SinglePerson = ({ team }) => {
    useEffect(() => {
        AOS.init({
          duration: 1000, 
          easing: "ease-in-out", 
          delay: 300, 
          offset: 90, 
        });
      }, []);
  const { image, name, role, description } = team;

  return (
    <div data-aos="zoom-in-up" className="card md:w-[400px] bg-base-100 shadow-xl hover:shadow-2xl ">
      <figure className="px-10 pt-10">
        <img src={image} alt="Team Member" className="rounded-xl w-full h-[300px]" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-2xl font-bold">{name}</h2>
        <p className="text-gray-600">{description}</p>
        <p className="text-gray-500">{role}</p>
      </div>
    </div>
  );
};

export default SinglePerson;
