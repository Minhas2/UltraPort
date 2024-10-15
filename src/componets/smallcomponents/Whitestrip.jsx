// WhiteStrip.js
import React, { useEffect, useState } from "react";
import "./Whitestrip.css"

const WhiteStrip = ({
  installmentOptions,
  selectedOption,
  handleOptionClick,
}) => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    // Check if the window width is less than or equal to 575px
    setIsMobile(window.innerWidth <= 575);
  };

  useEffect(() => {
    // Set initial state based on window size
    handleResize();
    // Add event listener to update state on resize
    window.addEventListener("resize", handleResize);
    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isMobile ? (
        <>
        <div className="upper">
          <div className="container pops py-white">
            <div className="row d-flex align-items-center">
              <div className="col-6">
                <div className="d-flex flex-column">
                  <div className="d-flex align-items-center mob-alma">
                    <h1 className="mb-0">Alma</h1>
                    <p className="mb-0 ms-2">2x</p>
                    <p className="mb-0 ms-2">3x</p>
                    <p className="mb-0 ms-2">4x</p>
                  </div>
                  <p className="mb-0">289,36 €</p>
                </div>
              </div>
              <div className="col-6">
                {" "}
                <p className="green mb-0 f-357">
                  {/* <i className="fa-regular fa-clock"></i> */}
                  <span className="ps-2 mob-span">
                    Délai de livraison 4-6 jours ouvrés
                  </span>
                </p>
              </div>
            </div>
          </div>
          </div>

          <div className="bot-mob-alma">
            <div className="container">
              <div className="row white-MiniBorder">
                <div className="col-6 ">
                  <p className="line-through mb-0 text-danger old p-12">629,00 €</p>
                  <h2 className="mb-0 new p-12">599,00 €</h2>
                </div>
                <div className="col-6">
                  <div className="d-flex justify-content-end">
                    <button className="product-btn d-flex ">
                     AJOUITER AU PAINIER
                      <i className="fas fa-shopping-cart ps-2" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        // desktop vetsion
        <div className="container pops py-4">
          <div className="d-flex justify-content-between flex-lg-row flex-sm-column align-items-center">
            <div className="d-flex">
              <p className="green mb-0">
                <i className="fa-regular fa-clock"></i>
                <span className="ps-2">
                  Délai de livraison 4-6 jours ouvrés
                </span>
              </p>
              <span className="px-3">|</span>

              <p className="bold mb-0">
                Alma
                {installmentOptions.map((option, index) => (
                  <span
                    key={index}
                    className={`installment-option ms-2 ${
                      selectedOption === index ? "active" : ""
                    }`}
                    onClick={() => handleOptionClick(index)}
                    style={{ cursor: "pointer" }}
                  >
                    {option.times}
                  </span>
                ))}
              </p>

              {/* Display the selected price */}
              {selectedOption !== null && (
                <span className="ps-4 price-display">
                  {installmentOptions[selectedOption].price}
                </span>
              )}
            </div>

            <div className="d-flex mt-991">
              <div className="d-flex flex-column">
                <p className="line-through mb-0 text-danger">629,00 €</p>
                <h2 className="mb-0">599,00 €</h2>
              </div>
              <button className="product-btn  ms-3">
                Un problème est survenu
                <i className="fas fa-shopping-cart ps-2" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WhiteStrip;
