import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
const Footer = () => {
  return (
    <footer class="bg-[#7A1CAC]  text-white mt-6 py-8 px-6 text-md">
      <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <h4 class="text-lg font-semibold mb-2">About Us</h4>
          <p class="text-gray-400">
             Pateintsystem is your trusted platform for booking doctor appointments
            online. Connect with verified healthcare professionals anytime,
            anywhere.
          </p>
        </div>

        <div>
          <h4 class="text-lg font-semibold mb-2">Quick Links</h4>
          <ul class="text-gray-400 space-y-1">
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Help">Help</Link>
            </li>
            <li>
              <Link to="/Services">Services</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-lg font-semibold mb-2">Contact Us</h4>
          <p class="text-gray-400">Email: support@pateintsystem.com</p>
          <p class="text-gray-400">Phone: +91 2000574964</p>
          <p class="text-gray-400">
            Address: 123 Wellness Street, New Delhi, India
          </p>
        </div>

        <div className="">
          <h4 class="text-lg font-semibold mb-2">Social Links</h4>
          <ul class="text-gray-400 space-y-2 text-[20px]">
            <li className="hover:text-white duration-200">
              <Link to="#">
                <FaInstagram />
              </Link>
            </li>
            <li className="hover:text-white duration-200">
              <Link to="#">
                <FaFacebook />
              </Link>
            </li>
            <li className="hover:text-white duration-200">
              <Link to="#">
                <FaWhatsapp />
              </Link>
            </li>
            <li className="hover:text-white duration-200">
              <Link to="#">
                <FaXTwitter />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div class="text-center text-gray-400 mt-8">
        &copy; 2025 Pateintsystem. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
