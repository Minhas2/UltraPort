import React, { useState, useEffect, useRef } from "react";
import "./Header.css";
import DropdownNavItem from "./DropdownNavItem";
import Mobileheader from "./mobileheader";
import PcDrop from "./dropdowns/PcDrop";
import ConfiguraterPc from "./dropdowns/ConfiguraterPc";
import Ordinatur from "./dropdowns/Ordinatur";
import PCeditiondrop from "./dropdowns/PCeditiondrop";
import Reductions from "./dropdowns/Reductions";
import { Link } from "react-router-dom";
import "./DropdownNavItem.css";

export default function Header() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1023);
  const [show, setShow] = useState(false);

  const navbarCollapseRef = useRef(null); // Add a ref to access the collapse element

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Function to handle navbar close
  const closeNavbar = () => {
    if (navbarCollapseRef.current && navbarCollapseRef.current.classList.contains("show")) {
      navbarCollapseRef.current.classList.remove("show");
    }
  };

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
          <div className="preNavbar">
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
          </div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
              {/* Logo */}
              <Link className="navbar-brand" to={"/"} onClick={closeNavbar}>
                <img
                  src="../../../assets/ultrport.png"
                  alt="Logo"
                  className="navbar-logo"
                />
              </Link>
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
                ref={navbarCollapseRef} // Attach ref to navbar collapse
              >
                {/* Links (centered in desktop) */}
                <ul className="navbar-nav mx-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to="/pc-gamer" onClick={closeNavbar}>PC Gamer</Link>
                    <PcDrop />
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/" onClick={closeNavbar}>Configurateur PC</Link>
                    <ConfiguraterPc />
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/" onClick={closeNavbar}>Ordinateur de bureau</Link>
                    <Ordinatur />
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/" onClick={closeNavbar}>PC Editions spéciales</Link>
                    <PCeditiondrop />
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/" onClick={closeNavbar}>Accessoires PC</Link>
                    <PcDrop />
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/" onClick={closeNavbar}>Réductions</Link>
                    <Reductions />
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/" onClick={closeNavbar}>Promo</Link>
                  </li>
                </ul>

                {/* Icons with slanted lines */}
                <div className="navbar-icons d-flex">
                  <button className="nav-icon" onClick={closeNavbar}>
                    <i className="fas fa-search" />
                  </button>
                  <Link to="/" className="nav-icon" onClick={closeNavbar}>
                    <i className="fas fa-user" />
                  </Link>
                  <button onClick={handleShow} className="nav-icon" onClick={closeNavbar}>
                    <i className="fas fa-shopping-cart" />
                  </button>
                </div>
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
