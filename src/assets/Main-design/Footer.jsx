import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram, FaXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="  py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold ">A Sports <br />Equipment Store</h2>
          <p className="mt-2 text-sm">
            Your go-to place for amazing gadgets and accessories.
          </p>
        </div>

      
        <div className="text-center">
          <h3 className="text-lg font-semibold ">Contact Us</h3>
          <p className="mt-2 text-sm">
            Email: support@ASportsEquipmentStore.com
          </p>
          <p>Phone: +1 (234) 567-8901</p>
          <p>Address: 123 Tech Street, Innovation City</p>
        </div>

        {/* Social Media Links */}
        <div className="text-center md:text-right">
          <h3 className="text-lg font-semibold ">Follow Us</h3>
          <div className="mt-4 flex justify-center md:justify-end gap-4">
            <a
              href="#"
              className=" hover:text-white transition"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook fa-lg"><FaFacebook></FaFacebook></i>
            </a>
            <a
              href="#"
              className=" hover:text-green transition"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter fa-lg"><FaXTwitter /></i>
            </a>
            <a
              href="#"
              className=" hover:text-blue transition"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram fa-lg"><FaSquareInstagram /></i>
            </a>
            <a
              href="#"
              className=" hover:text-pink transition"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin fa-lg"><IoLogoLinkedin /></i>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center border-t border-gray-600 pt-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} MyWebsite. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
