import React from "react";
import { FaTwitter } from "react-icons/fa";
import { MdFacebook } from "react-icons/md";
import { TbBrandInstagram } from "react-icons/tb";
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800">
      {/* Newsletter Section */}
      <div className="bg-black text-white px-6 py-8 w-[1280px] m-10 rounded-2xl">
  <div className="max-w-6xl mx-auto flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6">
    <h2 className="text-xl font-bold text-center lg:text-left">
      STAY UPTO DATE ABOUT OUR LATEST OFFERS
    </h2>
    <form className="flex flex-col gap-4 w-full lg:w-auto">
      <input
        type="email"
        placeholder="Enter your email address"
        className="flex-grow px-4 py-3 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-gray-500"
      />
      <button
        type="submit"
        className="bg-white text-black font-semibold px-6 py-3 rounded-lg hover:bg-gray-300 transition-all"
      >
        Subscribe to Newsletter
      </button>
    </form>
  </div>
</div>


      {/* Main Footer */}
      <div className="block lg:hidden ml-2">
          <h3 className="text-lg font-extrabold">SHOP.CO</h3>
          <p className="mt-2 text-sm text-gray-600">
            We love clothes that suit your style and which you’re proud to wear.
            From women to men.
          </p>
          <div className="flex gap-2 mt-2">
          <FaTwitter />
          <MdFacebook />
          <TbBrandInstagram />
          <FaGithub />
          </div>
        </div>  
      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 lg:grid-cols-5 gap-6">
        {/* Company Section */}
        <div className="lg:block hidden">
          <h3 className="text-lg font-extrabold">SHOP.CO</h3>
          <p className="mt-2 text-sm text-gray-600">
            We love clothes that suit your style and which you’re proud to wear.
            From women to men.
          </p>
          <div className="flex gap-2 mt-2">
          <FaTwitter />
          <MdFacebook />
          <TbBrandInstagram />
          <FaGithub />
          </div>

          <div className="flex items-center space-x-4 mt-4">
            {/* Social Media Icons */}
            <a href="#" className="text-gray-500 hover:text-black">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-black">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-black">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-black">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        {/* Links Sections */}
        <div>
          <h4 className="text-sm font-bold mb-4">COMPANY</h4>
          <ul className="text-sm space-y-2">
            <li>
              <a href="#" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Works
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Career
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold mb-4">HELP</h4>
          <ul className="text-sm space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Customer Support
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Delivery Details
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold mb-4">FAQ</h4>
          <ul className="text-sm space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Account
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Manage Deliveries
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Orders
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Payments
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold mb-4">RESOURCES</h4>
          <ul className="text-sm space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Free eBooks
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Development Tutorial
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                How-to Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                YouTube Playlist
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr />

      {/* Bottom Section */}
      <div className="bg-lightGray text-gray-600 py-4 text-center text-sm flex justify-between px-3 items-center">
        <p>
          Shop.co © 2000-2023, All Rights Reserved
        </p>
        <div className="mt-2">
          <img
            src="/Frame 53.png"
            alt="Payment Methods"
            className="inline-block"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;