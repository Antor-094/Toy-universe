import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
const {user,logOut} = useContext(AuthContext)
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
 const handleLogOut =()=>{
     logOut()
 }
  return (
    <nav className="flex items-center justify-between flex-wrap bg-[#e2eff1] p-6">
      <div className="flex items-center flex-shrink-0 text-black mr-6">
        <img
          src="https://i.ibb.co/DD38jf7/logo.png"
          alt="Website Logo"
          className="h-8 w-8 mr-2 rounded-md"
        />
        <Link
          to="/"
          className="font-semibold text-xl tracking-tight hover:bg-[#b6d5e1] transition duration-300 ease-in-out"
        >
          Toytopia
        </Link>
      </div>
      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white"
          onClick={toggleMenu}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`w-full spa block flex-grow lg:flex lg:items-center lg:w-auto ${
          isOpen ? "" : "hidden"
        }`}
      >
        <div className="lg:flex-grow">
          <Link
            to="/"
            className="block mt-4 lg:inline-block lg:mt-0 font-semibold text-black mr-4 hover:bg-[#b6d5e1] transition duration-300 ease-in-out py-2 px-4 rounded-md"
          >
            Home
          </Link>
          <Link
            to="/all-toys"
            className="block mt-4 lg:inline-block lg:mt-0 font-semibold text-black mr-4 hover:bg-[#b6d5e1] transition duration-300 ease-in-out py-2 px-4 rounded-md"
          >
            All Toys
          </Link>
          {user ? (
            <>
              <Link
                to="/my-toys"
                className="block mt-4 lg:inline-block lg:mt-0 font-semibold text-black mr-4 hover:bg-[#b6d5e1] transition duration-300 ease-in-out py-2 px-4 rounded-md"
              >
                My Toys
              </Link>
              <Link
                to="/add-toy"
                className="block mt-4 lg:inline-block lg:mt-0 font-semibold text-black mr-4 hover:bg-[#b6d5e1] transition-300 ease-in-out py-2 px-4 rounded-md"
              >
                Add A Toy
              </Link>
            </>
          ) : (
            <></>
          )}
          <Link
            to="/blogs"
            className="block mt-4 lg:inline-block lg:mt-0 font-semibold text-black mr-4 hover:bg-[#b6d5e1] transition duration-300 ease-in-out py-2 px-4 rounded-md"
          >
            Blogs
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <div>
            {user ? (
              <>
                <Link
                  to="/"
                  className="block mt-4 lg:inline-block lg:mt-0 font-semibold text-black mr-4 hover:bg-[#b6d5e1] transition duration-300 ease-in-out py-2 px-4 rounded-md"
                >
                  <button onClick={handleLogOut}>Logout</button>
                </Link>
              </>
            ) : (
              <>
                {" "}
                <Link
                  to="/login"
                  className="block mt-4 lg:inline-block lg:mt-0 font-semibold text-black mr-4 hover:bg-[#b6d5e1] transition duration-300 ease-in-out py-2 px-4 rounded-md"
                >
                  <button>Login</button>
                </Link>
              </>
            )}
          </div>
          {user ? (
            <>
              <div
                className="flex tooltip sm:tooltip-left tooltip-top items-center"
                data-tip={user.displayName}
              >
                <img
                  src={user.photoURL}
                  alt="User Profile"
                  className="h-14 w-14 mr-2 rounded-md"
                />
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
