import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroSection from "./Components/HeroSection";
import { useState } from "react";
import Destination from "./Components/Destination";
import Responses from "./Responses";

const App = () => {
  const [countryPage, setCountryPage] = useState(false);
  const [country, setCountry] = useState(null);
  const [responseResult, setResponseResult] = useState(null)

  const countryPageToggle = () => {
    setCountryPage(!countryPage);
  };
  const selectCountry = (country) => {
    const response = Responses.filter((data) => data.countryISO === country.ISOCode); // Use '===' for comparison
    setCountry(country);
    setResponseResult(response.length > 0 ? response[0] : null); // Set the result if found
  }
  
  return (
    <>
      {countryPage ? (
        <Destination toggle={countryPageToggle} country = {country} response={responseResult} />
      ) : (
        <HeroSection toggle={countryPageToggle} countrySelection={selectCountry} />
      )}
      {/*  */}
    </>
  );
};

export default App;
