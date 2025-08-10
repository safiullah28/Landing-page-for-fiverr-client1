import React from "react";
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-section">
          <div className="footer-top">
            <div className="footer-div footer-div1">
              <h1>
                Placy<span>Market</span>
              </h1>
              <p>
                This platform makes it easy for marketplace owners to rent out
                their commercial spaces, vendors to find the perfect selling
                location, and investors to discover franchise opportunities.
              </p>
              <div className="footer-logo-div">
                <div className="footer-logo-1">
                  <FaFacebookF width={30} />
                </div>

                <div className="footer-logo-1">
                  <FaInstagram width={30} />
                </div>
                <div className="footer-logo-1">
                  <FaLinkedinIn width={30} />
                </div>
              </div>
            </div>
            <div className="footer-div footer-div2">
              <h1>Our Links</h1>
              <ul>
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">About Us</a>
                </li>
                <li>
                  <a href="">Listings</a>
                </li>
                <li>
                  <a href="">Blog</a>
                </li>
                <li>
                  <a href="">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="footer-div footer-div3">
              <h1>Contact Us</h1>
              <ul>
                <li>
                  <div className="footer-logo-2">
                    <IoLocationSharp width={30} color="orange" />
                  </div>
                  <span>Maple Street Shopping Square, Houston</span>
                </li>
                <li>
                  <div className="footer-logo-2">
                    <IoMdMail width={30} color="orange" />
                  </div>

                  <span>+12 345 6789</span>
                </li>
                <li>
                  <div className="footer-logo-2">
                    <FaPhoneAlt width={30} color="orange" />
                  </div>

                  <span>support@marketplaceplatform.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <hr />
            <p>Copyright@2025. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
