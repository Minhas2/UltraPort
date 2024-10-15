import React from 'react'

export default function DropCommon() {
  return (
    <div className="row p-dropCommon I5 d-flex flex-wrap">
            {/* Trier Dropdown */}
            <div className="col-lg-2 col-md-4 col-12 mb-3">
              <div className="dropdown w-100 IDrop">
                <button
                  className="btn dropdown-toggle w-100 d-flex justify-content-between align-items-center"
                  type="button"
                  id="sortDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Trier
                </button>
                <ul className="dropdown-menu" aria-labelledby="sortDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Option 1
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Option 2
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Option 3
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Prix Dropdown */}
            <div className="col-lg-2 col-md-4 col-12 mb-3">
              <div className="dropdown w-100 IDrop">
                <button
                  className="btn dropdown-toggle w-100 d-flex justify-content-between align-items-center"
                  type="button"
                  id="priceDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Prix
                </button>
                <ul className="dropdown-menu" aria-labelledby="priceDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Low to High
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      High to Low
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Processor Dropdown */}
            <div className="col-lg-2 col-md-4 col-12 mb-3">
              <div className="dropdown w-100 PDrop">
                <button
                  className="btn dropdown-toggle w-100 d-flex justify-content-between align-items-center"
                  type="button"
                  id="processorDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Processor
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="processorDropdown"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Low to High
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      High to Low
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Carte Graphique Dropdown */}
            <div className="col-lg-2 col-md-4 col-12 mb-3">
              <div className="dropdown IDrop">
                <button
                  className="btn dropdown-toggle w-100 d-flex justify-content-between align-items-center"
                  type="button"
                  id="gpuDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Carte Graphique
                </button>
                <ul className="dropdown-menu" aria-labelledby="gpuDropdown">
                  <li>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="gpu1"
                      />
                      <label className="form-check-label" htmlFor="gpu1">
                        Nvidia GeForce RTX 3050 (3)
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="gpu2"
                      />
                      <label className="form-check-label" htmlFor="gpu2">
                        Nvidia GeForce RTX 3060 (3)
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="gpu3"
                      />
                      <label className="form-check-label" htmlFor="gpu3">
                        Nvidia GeForce RTX 4060 Ti (3)
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="gpu4"
                      />
                      <label className="form-check-label" htmlFor="gpu4">
                        Nvidia GeForce RTX 4070 Super (1)
                      </label>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* SSD Dropdown */}
            <div className="col-lg-2 col-md-4 col-12 mb-3">
              <div className="dropdown IDrop">
                <button
                  className="btn dropdown-toggle w-100 d-flex justify-content-between align-items-center"
                  type="button"
                  id="ssdDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  SSD
                </button>
                <ul className="dropdown-menu" aria-labelledby="ssdDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      512GB
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      1TB
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      2TB
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* RAM Dropdown */}
            <div className="col-lg-2 col-md-4 col-12 mb-3">
              <div className="dropdown IDrop">
                <button
                  className="btn dropdown-toggle w-100 d-flex justify-content-between align-items-center"
                  type="button"
                  id="ramDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  RAM
                </button>
                <ul className="dropdown-menu" aria-labelledby="ramDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      16GB
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      32GB
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      64GB
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
  )
}
