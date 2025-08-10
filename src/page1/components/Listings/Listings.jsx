import React from "react";
import "./Listings.css";
import img3 from "../../../assets/img3.png";
import img4 from "../../../assets/img4.png";
import img5 from "../../../assets/img5.png";
const Listings = () => {
  return (
    <>
      <section>
        <div className="listings-section">
          <h1>Featured Marketplace Listings</h1>
          <p>
            Explore top marketplace listings with verified spaces, detailed
            descriptions, and flexible rental options to suit your business
            needs.
          </p>
          <div className="listings-frame">
            <div className="frames frame1">
              <div>
                <div className="listings-img-div">
                  <img src={img3} alt="" />
                </div>
                <div className="listings-title-div">
                  <h1>Downtown Shopping Center, New York</h1>
                  <h3>$500/month</h3>
                </div>
                <div className="listings-content-div">
                  <p>Fully furnished</p>
                  <p>300 Sq. Ft.</p>
                  <p>Near Metro</p>
                </div>
                <div className="listings-button-div">
                  <button>View Listing</button>
                </div>
              </div>
              <hr />
            </div>
            <div className="frames frame2">
              <div>
                <div className="listings-img-div">
                  <img src={img4} alt="" />
                </div>
                <div className="listings-title-div">
                  <h1>Food Court Space, Los Angeles</h1>
                  <h3>$800/month</h3>
                </div>
                <div className="listings-content-div">
                  <p>Fully furnished</p>
                  <p>300 Sq. Ft.</p>
                  <p>Near Metro</p>
                </div>
                <div className="listings-button-div">
                  <button>View Listing</button>
                </div>
              </div>
              <hr />
            </div>
            <div className="frames frame3">
              <div>
                <div className="listings-img-div">
                  <img src={img5} alt="" />
                </div>
                <div className="listings-title-div">
                  <h1>Boutique Retail Space, Chicago</h1>
                  <h3>$600/month</h3>
                </div>
                <div className="listings-content-div">
                  <p>Fully furnished</p>
                  <p>300 Sq. Ft.</p>
                  <p>Near Metro</p>
                </div>
                <div className="listings-button-div">
                  <button>View Listing</button>
                </div>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="view-more-button">
          <button>View more</button>
        </div>
      </section>
    </>
  );
};

export default Listings;
