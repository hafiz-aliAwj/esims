
import React from "react";
import DestinationSearch from "./DestinationSearch";

const HeroSection = ({countrySelection, toggle}) => {

  return (
    <section className="home-hero-sect">
      <div className="container">
        <div className="row">
          <div className="col-lg-5" id="col">
            <div className="left">
              <h1 className="h1-head">
                <h1>
                  <strong>Stay Connected: eSIMS For Every Destination</strong>
                </h1>
              </h1>
              <p className="p-sty">
                Experience lightning-fast mobile data with our eSIMs—no speed
                limits, so you can stream, and browse without interruption. Stay
                connected and make the most of every moment, no matter where you
                are!
              </p>
              {/* <div className="destination-wrapper enter-destination-input-div">
                <div className="enter-destination-input-div">
                  <FaLocationDot className="location-icon" />{" "}
                  <FaMagnifyingGlass className="search-icon" />
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter location"
                  />
                </div>
              </div> */}
              <DestinationSearch toggle={toggle} SelectCountry={countrySelection} />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="right">
              <button className="google-reviews-btn btn">
                <ul>
                  <li>
                    <img src="/assets/Trustpilot.960f95a0.webp"></img>
                  </li>
                  <li className="cont">
                    <span className="reviews">
                      ⭐⭐⭐⭐✰ <span>4.2</span>
                    </span>
                    <span className="g-text">SiteJabber</span>
                  </li>
                </ul>
              </button>
              <div>
                <img src="/assets/Correct mobile banner-01.webp"></img>
              </div>
              <button className="trustpilot-reviews-btn btn">
                <ul>
                  <li>
                    <img src="/assets/sidejabber.90e23afa.webp" />
                  </li>
                  <li className="cont">
                    <span className="reviews">
                      ⭐⭐⭐⭐⭐ <span>4.9</span>
                    </span>
                    <span className="trust-text">Trustpilot</span>
                  </li>
                </ul>
              </button>
            </div>
          </div>
        </div>
      </div>
      <img
        className="red-line-one"
        src="/assets/girl with mobile copy.webp"
        alt="hi"
      />
    </section>
  );
};

export default HeroSection;
