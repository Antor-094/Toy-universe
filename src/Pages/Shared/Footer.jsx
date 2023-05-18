
import { FaGithub, FaInstagram, FaFacebook, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  
  return (
    <footer className="bg-gray-800 text-white py-8 px-3">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/3 lg:w-1/4 mb-4 md:mb-0">
          <img src="https://i.ibb.co/DD38jf7/logo.png" alt="" className="h-16 rounded-md mb-2" />
          <p className="text-gray-400">We sell the best car toys in the universe!</p>
        </div>
        <div className="w-full md:w-1/3 lg:w-1/4 mb-4 md:mb-0">
          <h3 className="text-lg font-bold mb-2">Contact Us</h3>
          <p className="text-gray-400">123 Main Stp </p>
          <p className="text-gray-400">Anytown, USA 12345</p>
          <p className="text-gray-400">Phone: 555-555-5555</p>
          <a href="mailto:info@toyuniverse.com" className="text-gray-400 flex items-center mt-2"><FaEnvelope className="mr-2" />info@toyuniverse.com</a>
          <form className="mt-4">
            <label htmlFor="newsletter" className="sr-only">Subscribe to our newsletter</label>
            <div className="flex items-center">
              <input type="email" id="newsletter" placeholder="Enter your email" className="bg-gray-900 text-white py-2 px-4 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" />
              <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent">Subscribe</button>
            </div>
          </form>
        </div>
        <div className="w-full:w-1/3 lg:w-1/4 mb-4 md:mb-0">
          <h3 className="text-lg font-bold mb-2">Follow Us</h3>
          <div className="flex">
            <a href="#" className="mr-4"><FaFacebook className="text-blue-600 hover:text-blue-700" /></a>
            <a href="#" className="mr-4"><FaInstagram className="text-pink-600 hover:text-pink-700" /></a>
            <a href="#" className="mr-4"><FaTwitter className="text-blue-400 hover:text-blue-500" /></a>
            <a href="#" className="mr-4"><FaGithub className="text-gray-400 hover:text-gray-500" /></a>
          </div>
        </div>
        <div className="w-full md:w-1/3 lg:w-1/4 mb-4 md:mb-0">
          <h3 className="text-lg font-bold mb-2">About Us</h3>
          <p className="text-gray-400">Toy Universe is a family-owned business that has been selling high-quality car toys for over 20 years. Our mission is to provide children with the best toys that encourage creativity, imagination, and learning.</p>
        </div>
      </div>
      <div className="container mx-auto mt-8 text-center">
        <p className="text-gray-400">&copy; 2023 Toy Universe. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
