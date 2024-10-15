import React from "react";
import { Link } from "react-router-dom";
import "./PcDrop.css";

export default function PcDrop() {
  return (
    <div className="megaNav">
      <div className="container pops">
        <div className="d-flex justify-content-between">
          <div className="container">
            <div className="row mt-4">
              <div className="col-lg-5">
                <div className="p-3">
                  <h6 className="bold">
                    <Link to="/pc-gamer/intel/" className=" text-decoration-none">PC Gamer Intel</Link>
                  </h6>
                  <p>
                    <Link to="/pc-gamer/intel/intel-core-i5/" className=" text-decoration-none">Intel Core i5</Link>
                  </p>
                  <p>
                    <Link to="/pc-gamer/intel/intel-core-i9/" className=" text-decoration-none">Intel Core i7</Link>
                  </p>
                  <p>
                    <Link to="/pc-gamer/intel/intel-core-i9/" className=" text-decoration-none">Intel Core i9</Link>
                  </p>

                  <h6 className="bold">
                    <Link to="/pc-gamer/amd/" className=" text-decoration-none">PC Gamer AMD</Link>
                  </h6>
                  <p>
                    <Link to="/pc-gamer/amd/amd-ryzen-5/" className=" text-decoration-none">AMD Ryzen 5</Link>
                  </p>
                  <p>
                    <Link to="/pc-gamer/amd/amd-ryzen-7/" className=" text-decoration-none">AMD Ryzen 7</Link>
                  </p>
                  <p>
                    <Link to="/pc-gamer/amd/amd-ryzen-9/" className=" text-decoration-none">AMD Ryzen 9</Link>
                  </p>

                  <h6 className="bold mt-4">
                    <Link to="/pc-gamer/pc-gamer-complet/" className=" text-decoration-none">PC Gamer Complet</Link>
                  </h6>
                  <h6 className="mt-4 bold">
                    <Link to="/pc-gamer/pc-gamer-fixe/" className=" text-decoration-none">PC Gamer Fixe</Link>
                  </h6>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="p-3 ps-pc border-left">
                  <h6 className="bold">
                    <Link to="/pc-gamer/pc-premium-gaming/" className=" text-decoration-none">PC Premium</Link>
                  </h6>
                  <h6 className="mt-4 bold">
                    <Link to="/pc-gamer/pc-gamer-budget/" className=" text-decoration-none">PC Gamer Pour Budget</Link>
                  </h6>
                  <p className="mt-4">
                    <Link to="/pc-gamer-800-euro" className=" text-decoration-none">PC Gamer à 800 €</Link>
                  </p>
                  <p>
                    <Link to="/pc-gamer-1000-euro" className=" text-decoration-none">PC Gamer à 1000€</Link>
                  </p>
                  <p>
                    <Link to="/pc-gamer-1500-euro" className=" text-decoration-none">PC Gamer à 1500€</Link>
                  </p>
                  <p>
                    <Link to="/pc-gamer-2000-euro" className=" text-decoration-none">PC Gamer à 2000€</Link>
                  </p>

                  <h6 className="bold">
                    <Link to="/windows-11" className=" text-decoration-none">Windows 11</Link>
                  </h6>
                  <p>
                    <Link to="/windows-11-pc-gaming" className=" text-decoration-none">Windows 11 Gaming</Link>
                  </p>
                  <p>
                    <Link to="/xbox-game-pass-ultimate" className=" text-decoration-none">Xbox Gaming</Link>
                  </p>

                  <h6 className="bold">
                    <Link to="/all-pc-gamer" className=" text-decoration-none">See All PC Gamer</Link>
                  </h6>
                </div>
              </div>
            </div>
          </div>

          {/* The next column containing the product card is unchanged */}
          <div className="container">
            <div className="row mt-4">
              <div className="col-lg-6">
                <div className="p-3 border-left">
                  <img src="../assets/card1.png" alt="" className="mb-3" />
                  <h5>PC Premium gaming AMD Ryzen 9 7900X Super Nova</h5>
                  <ul className="plus-sign-list mt-3">
                    <li>Windows 11 Home</li>
                    <li>AMD Ryzen 9 7900X, 12x 4,70 GHz</li>
                    <li>
                      NVIDIA GeForce <strong>RTX 4080 Super</strong> 16 Go
                    </li>
                    <li>32Go Kingston 6000Mhz DDR5 RGB RAM</li>
                    <li>Gigabyte X670 Aorus Elite</li>
                    <li>1To Crucial T700 M.2 NVMe SSD</li>
                  </ul>
                  <div className="d-flex card-font align-items-center green">
                    <i className="fa-regular fa-clock"></i>
                    <span className="ps-1">
                      Délai de livraison 4-6 jours ouvrés
                    </span>
                  </div>

                  <div className="d-flex mt-3 justify-content-between align-items-center">
                    <div className="d-flex flex-column">
                      <p className="m-0 old-price">3 074,00 €</p>
                      <span className="new-price">2 999,00 €</span>
                    </div>
                    <div>
                      <button className="cart-btn">
                        <i className="fas fa-shopping-cart" />
                      </button>
                      <button className="plus-btn">plus</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="p-3 border-left">
                  <img src="../assets/card1.png" alt="" className="mb-3" />
                  <h5>PC Premium gaming AMD Ryzen 9 7900X Super Nova</h5>
                  <ul className="plus-sign-list mt-3">
                    <li>Windows 11 Home</li>
                    <li>AMD Ryzen 9 7900X, 12x 4,70 GHz</li>
                    <li>
                      NVIDIA GeForce <strong>RTX 4080 Super</strong> 16 Go
                    </li>
                    <li>32Go Kingston 6000Mhz DDR5 RGB RAM</li>
                    <li>Gigabyte X670 Aorus Elite</li>
                    <li>1To Crucial T700 M.2 NVMe SSD</li>
                  </ul>
                  <div className="d-flex card-font align-items-center green">
                    <i className="fa-regular fa-clock"></i>
                    <span className="ps-1">
                      Délai de livraison 4-6 jours ouvrés
                    </span>
                  </div>

                  <div className="d-flex mt-3 justify-content-between align-items-center">
                    <div className="d-flex flex-column">
                      <p className="m-0 old-price">3 074,00 €</p>
                      <span className="new-price">2 999,00 €</span>
                    </div>
                    <div>
                      <button className="cart-btn">
                        <i className="fas fa-shopping-cart" />
                      </button>
                      <button className="plus-btn">plus</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
