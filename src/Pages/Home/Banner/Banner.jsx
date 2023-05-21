import { useState, useEffect } from "react";

const Banner = () => { const [bannerIndex, setBannerIndex] = useState(0);
  const bannerImages = [
    "https://i.ibb.co/9pYJNFz/gimmel-magaway-4-E0u7-Vsf-Gms-unsplash.jpg",
    "https://i.ibb.co/JpdScJ1/sandy-millar-nu-S2-GDp-CDo-I-unsplash.jpg",
    "https://i.ibb.co/kJjkmmq/gustavo-S-W9v-DL5wh-U-unsplash.jpg",
    "https://i.ibb.co/ftcb83k/mink-mingle-Riz1q-Apl-MQk-unsplash.jpg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setBannerIndex((prevIndex) =>
        prevIndex === bannerImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // change the image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const style = {
    backgroundImage: `url("${bannerImages[bannerIndex]}")`,
    transition: "background-image 1s ease-in-out",
  };

  return (
    <div className="hero min-h-[90vh] mb-7" style={style}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            Rev Up Your Fun with Our Toy Cars at Toy Universe
          </h1>
          <p className="mb-5">
            Welcome to Toy Universe, your one-stop-shop for the best toy cars in town. From classic muscle cars to futuristic race cars, we have something for every young driver. Let your imagination run wild and explore our collection of toy cars today!
          </p>
          <button className="bg-[#1F2937] hover:bg-[#555273] p-3 rounded font-bold">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
