import React from "react";
import "./Business.css";
const Business = () => {
  return (
    <>
      <section>
        <div className="business-section">
          <h1>Ready to Grow Your Business?</h1>
          <p>
            Sign up today and start connecting with the right marketplace
            partners!
          </p>
          <div className="search-div">
            <input type="text" placeholder="Sign Up To Find a Marketplace" />
            <button>Sign Up</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Business;
