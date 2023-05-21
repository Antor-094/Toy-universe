/* eslint-disable react/no-unescaped-entities */


const ServicesDetails = () => {
    return (
        <div className="hero lg:w-[80%] mx-auto my-10">
        <div className="hero-content flex-col lg:gap-16 lg:flex-row-reverse bg-[#FFFFFF]  rounded-lg shadow-lg lg:px-20">
          <img
            src="https://i.ibb.co/j4Pm45r/PAW-Article-Image-01.jpg"
            className="lg:w-[490px] w-full"
          />
          <div>
            <p className="text-[##1F2937] mb-3">DISCOVER OUR SERVICES</p>
            <h1 className="lg:text-2xl text-xl font-semibold text-[#0D0D0D] mb-7">
            Welcome to Toy Universe! Experience the joy of car toys like never before. Explore our exceptional services and elevate your car toy experience!
            </h1>

            <button className="btn-main  hover:bg-[#555273] bg-[#1F2937] p-2 rounded font-bold text-white">Services</button>
          </div>
        </div>
      </div>
    );
};

export default ServicesDetails;