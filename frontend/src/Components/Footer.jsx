import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#7A1CAC] text-white mt-6 py-8 px-6 text-md">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        
        {/* About */}
        <div>
          <h4 className="text-lg font-semibold mb-2">About Us</h4>
          <p className="text-gray-400">
            Pateintsystem is your trusted platform for booking doctor appointments
            online. Connect with verified healthcare professionals anytime,
            anywhere.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
          <ul className="text-gray-400 space-y-1">
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

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
          <p className="text-gray-400">Email: support@pateintsystem.com</p>
          <p className="text-gray-400">Phone: +91 2000574964</p>
          <p className="text-gray-400">
            Address: 123 Wellness Street, New Delhi, India
          </p>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Social Links</h4>
          <ul className="text-gray-400 space-y-2 text-[20px]">
            <li className="hover:text-white duration-200">
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </li>
            <li className="hover:text-white duration-200">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
            </li>
            <li className="hover:text-white duration-200">
              <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp />
              </a>
            </li>
            <li className="hover:text-white duration-200">
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <FaXTwitter />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-400 mt-8">
        &copy; 2025 Pateintsystem. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
