import React from "react";
import "./Hero.css";
import img1 from "../../../assets/img1.png";

const options1 = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" }, // Fixed typo
  { value: "orange", label: "Orange" },
];

const options2 = [
  { value: "100-200", label: "$100-$200" },
  { value: "200-300", label: "$200-$300" },
  { value: "300-400", label: "$300-$400" },
];

const options3 = [
  { value: "small", label: "Small (0-500 sq ft)" },
  { value: "medium", label: "Medium (500-1000 sq ft)" },
  { value: "large", label: "Large (1000+ sq ft)" },
];

const Hero = () => {
  return (
    <section>
      <div className="hero-section">
        <div className="hero-section-left">
          <h1>
            Find the <span>Perfect Space</span> to Grow Your Business!
          </h1>
          <p>
            Whether you're a marketplace owner looking to rent out your
            commercial space or a vendor searching for the perfect location to
            sell your products, we've got you covered.
          </p>
          <div className="search-container">
            <select className="search-select">
              <option value="">Select category</option>
              {options1.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>

            <select className="search-select">
              <option value="">Price range</option>
              {options2.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>

            <select className="search-select">
              <option value="">Space size</option>
              {options3.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>

            <button className="search-button">Search</button>
          </div>
        </div>
        <div className="hero-section-right">
          <img src={img1} alt="Commercial space illustration" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
