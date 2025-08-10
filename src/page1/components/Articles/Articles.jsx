import React from "react";
import "./Articles.css";
import img7 from "../../../assets/img7.png";
import img8 from "../../../assets/img8.png";
import img9 from "../../../assets/img9.png";
import img10 from "../../../assets/img10.png";
const Articles = () => {
  return (
    <>
      <section>
        <div className="articles-container">
          <h1>Articles And Blogs</h1>
          <p>
            Stay informed with expert articles and blogs on marketplace trends,
            rental tips, and business growth strategies.
          </p>
          {/* Left container */}
          <div className="articles-img-container">
            <div className="articles-img-left-container">
              <div className="articles-img-left-top-container">
                <img src={img7} alt="" />
              </div>
              <div className="articles-img-left-bottom-container">
                <div className="articles-img-left-bottom-container-top">
                  <h1>The Future of Marketplace Rentals: Trends to Watch</h1>
                  <p>August 22.2025</p>
                </div>
                <div className="articles-img-left-bottom-container-bottom">
                  <p>
                    Stay ahead with the latest marketplace trends, from digital
                    transformation to flexible rental models, helping vendors
                    and owners adapt and grow their businesses.
                  </p>
                </div>
              </div>
            </div>

            {/* Right container */}
            <div className="articles-img-right-container">
              <div className="articles-img-right-container-inside">
                <div className="articles-img-right-container-inside-right">
                  <h3>Maximizing Sales in a Shared Marketplace</h3>
                  <p>
                    Proven strategies to attract more customers and boost
                    revenue ..
                  </p>
                  <span>August 22.2025</span>
                </div>
                <div className="articles-img-right-container-inside-left">
                  <img src={img8} alt="" />
                </div>
              </div>
              <div className="articles-img-right-container-inside">
                <div className="articles-img-right-container-inside-right">
                  <h3>Essential Legal Tips for Renting a Commercial Space</h3>
                  <p>
                    Understanding contracts, lease terms, and tenant rights ...
                  </p>
                  <span>August 22.2025</span>
                </div>
                <div className="articles-img-right-container-inside-left">
                  <img src={img9} alt="" />
                </div>
              </div>
              <div className="articles-img-right-container-inside">
                <div className="articles-img-right-container-inside-right">
                  <h3>The Future of Marketplace Rentals: Trends to Watch</h3>
                  <p>
                    Emerging industry trends and how they impact vendors and
                    owners...
                  </p>
                  <span>August 22.2025</span>
                </div>
                <div className="articles-img-right-container-inside-left">
                  <img src={img10} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Articles;
