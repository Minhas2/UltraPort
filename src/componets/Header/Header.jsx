import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <>
      {/* Top Header */}
      <div className="top-header">
        <div className="container">
          <div className="d-flex justify-content-between text-white">
            <div className="d-flex align-items-center">
              <i class="fa-solid fa-headphones"></i>
              <div className="px-2">UlTRAPORT HOTLINE</div>
              <div className="number">000000000</div>
              <i class="fa-solid fa-circle-exclamation ps-2"></i>
            </div>

            <div>123</div>
          </div>
        </div>
      </div>
    </>
  );
}
