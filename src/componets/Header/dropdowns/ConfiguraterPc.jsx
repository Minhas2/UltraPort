import React from "react";
import { Link } from "react-router-dom";
import "./ConfiguraterPC.css";

export default function ConfiguraterPc() {
  return (
    <div className="megaNav ">
      <div className="container pops">
        <div className="d-flex justify-content-between">
          <div className="p-3 pc-config">
            <h6 className="bold mt-3">
              <Link to="/configurateur-pc" className="link text-decoration-none">Configurateur PC</Link>
            </h6>
            <p>
              <Link to="/configurateur-pc/amd-ryzen-4000-5000" className="link text-decoration-none">AMD Ryzen 4000 & 5000</Link>
            </p>
            <p>
              <Link to="/configurateur-pc/amd-ryzen-7000-9000" className="link text-decoration-none">AMD Ryzen 7000 & 9000</Link>
            </p>
            <p>
              <Link to="/configurateur-pc/intel-core-12-13-14-gen" className="link text-decoration-none">Intel Core 12., 13. & 14. Gen</Link>
            </p>

            <h6 className="bold">
              <Link to="/configurer-pc-gamer" className="link text-decoration-none">Configurer un PC Gamer</Link>
            </h6>
            <p>
              <Link to="/configurateur-pc/amd-ryzen-4000-5000" className="link text-decoration-none">AMD Ryzen 4000 & 5000</Link>
            </p>
            <p>
              <Link to="/configurer-pc-gamer/amd-ryzen-7000-9000" className="link text-decoration-none">AMD Ryzen 7000 & 9000</Link>
            </p>
            <p>
              <Link to="/configurer-pc-gamer/intel-core-12-13-14-gen" className="link text-decoration-none">Intel Core 12., 13. & 14. Gen</Link>
            </p>

            <h6 className="bold mt-4">
              <Link to="/configurateur-pc/configurer-un-pc-multimedia" className="link text-decoration-none">Configurer un PC Multimedia</Link>
            </h6>
            <h6 className="mt-4 bold">
              <Link to="/configurateur-pc/configurer-un-pc-de-bureau/" className="link text-decoration-none">Configurer un PC de bureau</Link>
            </h6>
            <h6 className="mt-4 bold">
              <Link to="/configurateur-pc/see-all-configurateur-pc" className="link text-decoration-none">See all Configurateur PC</Link>
            </h6>
          </div>

          <div className="d-flex flex-column">
            <img src="../assets/deck.png" alt="" className="w-100" />
            <div className="bg-black p-3 text-white">
              <h1 className="green">Configure</h1>
              <h2>le PC de tes Reves</h2>
              <h6 className="mt-3">#FaisTonTruc</h6>
              <button className="config-btn">
                LANCE-TO!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
