import React, { useState, useEffect } from "react";
import { FaLocationDot, FaMagnifyingGlass, FaSpinner } from "react-icons/fa6";
import CountryList from "../CountryList";

const DestinationSearch = ({ SelectCountry }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchCountries = (term) => {
    setLoading(true);
    setTimeout(() => {
      const results = CountryList.filter((country) =>
        country.Name.toLowerCase().includes(term.toLowerCase())
      );
      setSearchResults(results);
      setLoading(false);
    }, 500);
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    if (value) {
      searchCountries(value);
    } else {
      setSearchResults([]);
    }
  };

  return (
    <div className="destination-wrapper">
      <div className="enter-destination-input-div position-relative">
        <FaLocationDot className="location-icon" />
        {loading ? (
          <FaSpinner className="search-icon loading-icon" />
        ) : (
          <FaMagnifyingGlass className="search-icon" />
        )}
        <input
          type="text"
          className="form-control"
          placeholder="Enter location"
          value={searchTerm}
          onChange={handleInputChange}
        />
      </div>

      {searchResults.length > 0 && (
        <div className="search-results">
          <div className="result-box">
            {searchResults.map((country, index) => (
              <div
                key={index}
                className="search-result-item"
                onClick={() => {
                  SelectCountry(country);
                  setSearchResults([]);
                  setSearchTerm("");
                }}
              >
                <img src={country.ImageUrl} />
                <span>{country.Name}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DestinationSearch;
