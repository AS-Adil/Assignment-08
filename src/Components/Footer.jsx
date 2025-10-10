import React from 'react';
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa'; // Using React icons for social media
import logo from '../assets/logo.png'; // Importing the logo image
import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer className="bg-[#0d2b45] text-white py-8 px-2 sm:px-4 lg:px-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
        {/* Logo and Description */}
        <div className="flex flex-col items-start">

           <div className='flex  gap-1'>
              <div>
              <img src={logo}  className="w-8 mb-4" />
              </div>
               <Link to={"/"} className='text-xl font-bold'>AppPulse</Link>
           </div>


          <p>
            AppPulse offers a collection of powerful applications designed to enhance your productivity. 
            Explore our apps, read details, and get installation options.
          </p>
        </div>

        <div className="text-left">
          <h4 className=" text-lg font-semibold mb-4">About AppPulse</h4>
          <ul className="space-y-2">
            <li><a href="" className="text-white hover:underline">Newsroom</a></li>
            <li><a href="" className="text-white hover:underline">Leadership</a></li>
            <li><a href="" className="text-white hover:underline">App Details</a></li>
            <li><a href="" className="text-white hover:underline">Install Now</a></li>
          </ul>
        </div>

        {/* Additional Links Section */}
        <div className="text-left">
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="" className="text-white hover:underline">Privacy Policy</a></li>
            <li><a href="" className="text-white hover:underline">Terms of Service</a></li>
            <li><a href="" className="text-white hover:underline">Contact Us</a></li>
            <li><a href="" className="text-white hover:underline">Support</a></li>
          </ul>
        </div>

        {/* Social Icons */}
        <div className="flex flex-col items-center">
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="" className="text-white hover:text-blue-600">
              <FaFacebookF size={24} />
            </a>
            <a href="" className="text-white hover:text-blue-400">
              <FaTwitter size={24} />
            </a>
            <a href="" className="text-white hover:text-red-600">
              <FaYoutube size={24} />
            </a>
            <a href="" className="text-white hover:text-pink-500">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
