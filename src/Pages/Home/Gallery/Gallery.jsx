// import React from 'react';
// import GalleryImg from "./GalleryImg";

import GalleryImg from "./GalleryImg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Gallery = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, 
      easing: "ease-in-out",
      delay: 300, 
      offset: 120
    });
  }, []);
  const images = [
    {
      id: 1,
      src: 'https://i.ibb.co/1zgJ8H7/Green-Scale-Model-Car.jpg',
      alt: 'Green-Scale-Model-Car',
      name:"Green Scale Model Car"
    },
    {
      id:2 ,
      src: 'https://i.ibb.co/fx0fCNM/Red-Toy-Car.webp',
      alt: 'Red-toy-car',
      name:"Red Toy Car"
    },
    {
      id: 3,
      src: 'https://i.ibb.co/L5dDn0R/Yellow-Car-Toy.webp',
     alt: 'Yellow-car-Toy',
      name:"Yellow Car Toy"
    },
    {
      id: 4,
      src: 'https://i.ibb.co/GTDD5S4/Yellow-Hummer-Suv.jpg',
      alt: 'Yellow-Hummer-Sub',
      name:"Yellow-Hummer-hub"
    },
    {
      id: 5,
      src: 'https://i.ibb.co/hdKZKMf/Blue-Alpine-Car.webp.jpg',
      alt: 'Blue Alpha car',
      name:"Blue Alpha car"
    },
    {
      id: 6,
      src: 'https://i.ibb.co/xF65H6P/Yellow-and-Black-Muscle-Car.webp',
      alt: 'Yellow and black muscle car',
      name:"Yellow and black muscle car"
    },
  ];

  return (
    <div className="container mx-auto my-12 p-2 border-2 border-gray-300 shadow-lg">
  <h2 className="text-4xl font-bold mb-5 text-center text-[#1F2937] uppercase tracking-wider">Car Toy Gallery</h2>
  <div data-aos="zoom-in-up" className="grid grid-cols-1 md:grid-cols-3 gap-3">
    {images.map(image => {
      return <GalleryImg key={image.id} image={image} />;
    })}
  </div>
</div>


  );
};

export default Gallery;
