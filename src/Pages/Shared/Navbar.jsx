import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaBars} from "react-icons/fa";

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
    <nav className="flex items-center justify-between flex-wrap bg-[#1F2937] p-6">
      <div className="flex items-center flex-shrink-0 text-white hover:text-black mr-6">
        <img
          src="https://i.ibb.co/DD38jf7/logo.png"
          alt="Website Logo"
          className="h-12 w-12 mr-2 rounded-md"
        />
        <Link
          to="/"
          className="font-semibold text-xl tracking-tight hover:bg-[#b6d5e1] transition duration-300 ease-in-out py-2 px-4 rounded-md"
        >
          Toy Universe
        </Link>
      </div>
      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white"
          onClick={toggleMenu}
        >
          
          <FaBars></FaBars>
        </button>
      </div>
      <div
        className={`w-full spa block flex-grow lg:flex lg:items-center lg:w-auto ${
          isOpen ? "" : "hidden"
        }`}
      >
        <div className="lg:flex-grow">
          <NavLink
            to="/"

            className={({ isActive }) => (isActive ? 'block mt-4 lg:inline-block lg:mt-0 font-semibold hover:text-black text-white  border-b-[3px]  mr-4 hover:bg-[#b6d5e1] transition duration-300 ease-in-out py-2 px-4 rounded-md' : 'block mt-4 lg:inline-block lg:mt-0 font-semibold hover:text-black text-white mr-4 hover:bg-[#b6d5e1] transition duration-300 ease-in-out py-2 px-4 rounded-md')}
          >
            Home
          </NavLink>
          <NavLink
            to="/allToys"
            className={({ isActive }) => (isActive ? 'block mt-4 lg:inline-block lg:mt-0 font-semibold hover:text-white text-white  border-b-[3px] mr-4 hover:bg-[#b6d5e1] transition duration-300 ease-in-out py-2 px-4 rounded-md' : 'block mt-4 lg:inline-block lg:mt-0 font-semibold hover:text-black text-white mr-4 hover:bg-[#b6d5e1] transition duration-300 ease-in-out py-2 px-4 rounded-md')}
          >
            All Toys
          </NavLink>
          {user ? (
            <>
              <NavLink
                to="/myToys"
                className={({ isActive }) => (isActive ? 'block mt-4 lg:inline-block lg:mt-0 font-semibold hover:text-black text-white  border-b-[3px] mr-4 hover:bg-[#b6d5e1] transition duration-300 ease-in-out py-2 px-4 rounded-md' : 'block mt-4 lg:inline-block lg:mt-0 font-semibold hover:text-black text-white mr-4 hover:bg-[#b6d5e1] transition duration-300 ease-in-out py-2 px-4 rounded-md')}
              >
                My Toys
              </NavLink>
              <NavLink
                to="/addToys"
                className={({ isActive }) => (isActive ? 'block mt-4 lg:inline-block lg:mt-0 font-semibold hover:text-white text-white  border-b-[3px] mr-4 hover:bg-[#b6d5e1] transition duration-300 ease-in-out py-2 px-4 rounded-md' : 'block mt-4 lg:inline-block lg:mt-0 font-semibold hover:text-black text-white mr-4 hover:bg-[#b6d5e1] transition duration-300 ease-in-out py-2 px-4 rounded-md')}
              >
                Add A Toy
              </NavLink>
            </>
          ) : (
            <></>
          )}
          <NavLink
            to="/blogs"
            className={({ isActive }) => (isActive ? 'block mt-4 lg:inline-block lg:mt-0 font-semibold hover:text-white text-white  border-b-[3px] mr-4 hover:bg-[#b6d5e1] transition duration-300 ease-in-out py-2 px-4 rounded-md' : 'block mt-4 lg:inline-block lg:mt-0 font-semibold hover:text-black text-white mr-4 hover:bg-[#b6d5e1] transition duration-300 ease-in-out py-2 px-4 rounded-md')}
          >
            Blogs
          </NavLink>
        </div>
        <div className="flex items-center gap-3">
          <div>
            {user ? (
              <>
                <NavLink
                  to="/"
                  className='block mt-4 lg:inline-block lg:mt-0 font-semibold hover:text-black text-white mr-4 hover:bg-[#b6d5e1] transition duration-300 ease-in-out py-2 px-4 rounded-md'
                >
                  <button onClick={handleLogOut}>Logout</button>
                </NavLink>
              </>
            ) : (
              <>
                {" "}
                <NavLink
                  to="/login"
                  className={({ isActive }) => (isActive ? 'block mt-4 lg:inline-block lg:mt-0 font-semibold hover:text-white text-white  border-b-[3px] mr-4 hover:bg-[#b6d5e1] transition duration-300 ease-in-out py-2 px-4 rounded-md' : 'block mt-4 lg:inline-block lg:mt-0 font-semibold hover:text-black text-white mr-4 hover:bg-[#b6d5e1] transition duration-300 ease-in-out py-2 px-4 rounded-md')}
                >
                  <button>Login</button>
                </NavLink>
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
                  className="h-12 w-12 mr-2 rounded-md"
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
