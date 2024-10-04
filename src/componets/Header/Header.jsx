import React, { useState, useEffect } from "react";
import "./Header.css";
import DropdownNavItem from "./DropdownNavItem";
import Mobileheader from "./mobileheader";
import PcDrop from "./dropdowns/PcDrop";
import ConfiguraterPc from "./dropdowns/ConfiguraterPc";
import Ordinatur from "./dropdowns/Ordinatur";
import PCeditiondrop from "./dropdowns/PCeditiondrop";
import Reductions from "./dropdowns/Reductions";
import DeskCanvas from "./Offcanvas/deskCanvas"; // Rename to use PascalCase
import CoreI5 from "../Home/PC GAMER dropdown components/CoreI5";
import AMD from "../Home/PC GAMER dropdown components/AMDRyzen";
import PCgamercomplet from "../Home/PC GAMER dropdown components/PCgamercomplet";
import GamingPC800Euro from "../Home/PC GAMER dropdown components/GamingPC800Euro";
import Windows11 from "../Home/PC GAMER dropdown components/Windows11";
import PCgamerMain from "../Home/PC GAMER dropdown components/PCgamerMain";


export default function Header() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1023);

  // Update state based on window width
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 1023);
  };

  // Add event listener on mount and remove on unmount
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isMobile ? (
        /* Mobile Header */
        <Mobileheader />
      ) : (
        /* Desktop Header */
        <div className="top-header">
          <div className="container">
            <div className="d-flex justify-content-between text-white">
              <div className="d-flex align-items-center top-font">
                <i className="fa-solid fa-headphones"></i>
                <div className="px-2">ULTRAPORT HOTLINE</div>
                <div className="number">000000000</div>
                <i className="fa-solid fa-circle-exclamation ps-2"></i>
              </div>

              <div className="d-flex align-items-center top-font">
                <span className="gray">PAYS</span>
                <div className="country ps-3">
                  <div className=" dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle bg-transparent border-0"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img src="../assets/flag-fr-fr.svg" alt="" /> FRANCE
                    </button>
                    <ul className="dropdown-menu dropdown-menu-dark w-100 custom-dropdown">
                      <li>
                        <a className="dropdown-item active" href="#">
                          Italia
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Netherland
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Espana
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          United Kingdom
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
              {/* Logo */}
              <a className="navbar-brand" href="#">
                <img
                  src="../assets/ultrport.png"
                  alt="Logo"
                  className="navbar-logo"
                />
              </a>
              {/* Hamburger Icon for mobile */}
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              {/* Navbar links and icons */}
              <div
                className="collapse navbar-collapse justify-content-between"
                id="navbarNav"
              >
                {/* Links (centered in desktop) */}
                <ul className="navbar-nav mx-auto">
                  <DropdownNavItem
                    linkText="PC Gamer"
                    dropdownContent={<div>Your PC Gamer content here!</div>}
                  />
                  <DropdownNavItem
                    linkText="Configurateur PC"
                    dropdownContent={<div>Your Configurator content here!</div>}
                  />
                  <DropdownNavItem
                    linkText="Ordinateur de bureau"
                    dropdownContent={<div>Your Desktop content here!</div>}
                  />
                  <DropdownNavItem
                    linkText="PC Editions spéciales"
                    dropdownContent={
                      <div>Your Special Editions content here!</div>
                    }
                  />
                  <DropdownNavItem
                    linkText="Accessoires PC"
                    dropdownContent={<div>Your Accessories content here!</div>}
                  />
                  <DropdownNavItem
                    linkText="Réductions"
                    dropdownContent={<div>Your Discounts content here!</div>}
                  />
                  <DropdownNavItem
                    linkText="Promo"
                    dropdownContent={<div>Your Promo content here!</div>}
                  />
                </ul>

                {/* Icons with slanted lines */}
                <div className="navbar-icons d-flex">
                  <a href="#" className="nav-icon">
                    <i className="fas fa-search" />
                  </a>
                  <a href="#" className="nav-icon">
                    <i className="fas fa-user" />
                  </a>
                  <a
                    href="#"
                    className="nav-icon"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#searchOffcanvas"
                    aria-controls="searchOffcanvas"
                  >
                    <i className="fas fa-shopping-cart" />
                  </a>
                </div>
              </div>
            </div>
          </nav>

          {/* DeskCanvas for off-canvas menu */}
          <DeskCanvas />
        </div>
      )}

      {/* Uncomment and use these dropdowns when needed */}
      {/* <PcDrop /> */}
      {/* <ConfiguraterPc /> */}
      {/* <Ordinatur /> */}
      {/* <PCeditiondrop /> */}
      {/* <Reductions /> */}


      {/*Uncomment and use them PC GAMER Components */}
      {/* <CoreI5/> */}
      {/* <AMD/> */}
      {/* <PCgamercomplet/> */}
      {/* <GamingPC800Euro/> */}
      {/* <Windows11/> */}
      {/* <PCgamerMain/> */}


    </>
  );
}
