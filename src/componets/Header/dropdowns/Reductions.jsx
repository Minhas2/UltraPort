import React from 'react';
import { Link } from 'react-router-dom';
import './Reductions.css';

export default function Reductions() {
  return (
    <div className="megaNav">
      <div className="container pops">
        <div className="d-flex justify-content-between">
          <div className="p-3 pc-config">
            <h6 className="bold mt-3">
              <Link to="/reductions" className="link text-decoration-none">Allez à Réductions</Link>
            </h6>
            <h6 className="bold mt-3">
              <Link to="/md-deals" className="link text-decoration-none">Mega Deals</Link>
            </h6>
            <p className="mt-3">
              <Link to="/nvidia-rtx-deals" className="link text-decoration-none">RTX-Deals</Link>
            </p>
            {/* <p>
              <Link to="/amd-deals" className="link text-decoration-none">AMD-Deals</Link>
            </p>
            <p>
              <Link to="/ryzen-deals" className="link text-decoration-none">AMD Ryzen 7000 & 9000</Link>
            </p> */}

            <h6 className="bold">
              <Link to="/french-days" className="link text-decoration-none">French Days</Link>
            </h6>

            <h6 className="bold mt-4">
              <Link to="/rentree-scolaire" className="link text-decoration-none">Rentrée scolaire</Link>
            </h6>
            <h6 className="mt-4 bold">
              <Link to="/all-reductions" className="link text-decoration-none">See all Réductions</Link>
            </h6>
          </div>

          <div className="d-flex flex-column">
            <img src="../assets/deck.png" alt="" className="w-100" />
            <div className="bg-black p-3 text-white">
              <h2>Decouvre les <span className='green'>offres speciales</span></h2>
              <h6 className="mt-3">Mega Deals, bundles de jeux & plus encore</h6>
              <button className="config-btn">
                ECONOMISE DES MAINTENANT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
