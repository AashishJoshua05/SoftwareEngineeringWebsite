import React from 'react';

const placeholderlink = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4OyLQHtk0Sw7Ox7h1evH619BPIRL-FzNQAQ&usqp=CAU"

const Navbar = ({ loggedIn }) => {
  return (
    <nav className="flex items-center justify-between bg-gray-800 text-white py-2 px-8">
      <div className="flex items-center">
        {/* Logo */}
        <img src={placeholderlink} alt="Logo" className="h-10 w-1/2 rounded-md" />
        <span className="ml-2 text-base font-bold">Event Manager</span>
      </div>
      <div className="flex items-center">
        {/* Menu Items */}
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="text-white hover:text-gray-300">Home</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">About</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">Services</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">Contact</a>
          </li>
        </ul>
        {/* Profile Image */}
        {loggedIn ? (
          <a href="#" className="ml-4 flex items-center">
            <img src={placeholderlink} alt="Profile" className="h-8 w-8 rounded-full" />
          </a>
        ) : (
          <button className="ml-4 bg-gray-600 text-white rounded-md py-2 px-4 hover:bg-gray-700">
            Log in
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
