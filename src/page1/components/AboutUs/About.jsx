import React from "react";
import "./About.css";
import img2 from "../../../assets/img2.png";
const About = () => {
  return (
    <>
      <section>
        <div className="about-container">
          <div className="about-container-left">
            <img src={img2} alt="" />
          </div>
          <div className="about-container-right">
            <h1>About Us</h1>
            <p>
              The Placy Market is designed to seamlessly connect marketplace
              owners, vendors, and franchise investors. Whether you're looking
              to rent out a commercial space, find the perfect location for your
              business, or invest in a franchise, our platform makes the process
              smooth and efficient.
            </p>
            <p>
              We prioritize secure communication and privacy, allowing direct
              interactions only when a rental request is confirmed.Fully
              responsive on all devices, our platform is built to help
              businesses thrive in the most convenient and efficient way
              possible
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
