import React from "react";
import "./HowItWorks.css";
import img6 from "../../../assets/img6.png";
const HowItWorks = () => {
  return (
    <>
      <section>
        <div className="working-section">
          <h1>How It Works</h1>
          <p>
            Sign up as a marketplace owner or vendor, browse available spaces,
            and send a rental request. Once approved, connect with the owner to
            finalize the deal.
          </p>
          <div className="card-container">
            <div className="cards card1">
              <h1>1</h1>
              <h3>Browse Available Spaces</h3>
              <p> Search by location, price, and size.</p>
            </div>
            <div className="cards card2">
              <h1>2</h1>
              <h3>Send a Rental Request</h3>
              <p> Contact marketplace owners with your details.</p>
            </div>
            <div className="cards card3">
              <h1>3</h1>
              <h3>Start Selling!</h3>
              <p> Get approved and move in to start your business.</p>
            </div>
          </div>
          <div className="working-section-img-container">
            <img src={img6} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorks;
