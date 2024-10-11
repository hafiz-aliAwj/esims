import React from "react";
import { IoArrowBackOutline } from "react-icons/io5";

export default function Destination({ toggle, country, response }) {
  return (
    <section className="destination-hero-sect">
      <div className="container">
        <div className="back-icon">
          <IoArrowBackOutline className="back-button" onClick={toggle} />
        </div>
        <div className="row">
          <div className="col-lg-5">
            <div className="left-banner">
              <img src="/assets/africa-01.webp" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="right-banner">
              <ul className="first-ul">
                <li className="flag-li">
                  <h2 className="d-flex gap-2 align-items-center">
                    <img src={country.ImageUrl} alt="ABC" />
                    <div>eSIM for {country.Name}</div>
                  </h2>
                  <p>
                    Excellent Rating Based On <span>10,691 Reviews</span>
                    <img src="/assets/Trustpilot.960f95a0.webp" />
                  </p>
                </li>
                <li className="usd-li">
                  <h3>
                    $ <span>USD</span>
                  </h3>
                </li>
              </ul>
              <ul className="feature">
                <li className="nav-item">
                  <a className="nav-link active" href="#feature-tab">
                    Features
                  </a>
                </li>
              </ul>
              <div className="tab-content">
                <div className="active container tab-pane" id="features-tab">
                  <ul>
                    <li>Affordable data plans</li>
                    <li>
                      Fast and reliable internet from USA’s best networks.
                    </li>
                    <li>Works with all smartphones with eSIM technology.</li>
                    <li>Installation: with a QR code or manually</li>
                    <li>Delivery time: immediate, after purchase</li>
                    <li>No more roaming charges</li>
                  </ul>
                </div>
              </div>
              <h2 className="choose">Choose your data plan</h2>
              <div className="row choose-data-plan-row">
                {response ? (
                  response.packages.map((pack) => {
                    return (
                      <div className="col-lg-4" key={pack.packageid}>
                        <div className="item">
                          <input type="radio"></input>
                          <h5>{pack.gbs}GB</h5>
                          <p>{pack.days} Days</p>
                          <h6>${pack.priceusd} USD</h6>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div>No Packages Available</div>
                )}
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
