import React from 'react';
import { Link } from 'react-router-dom';

export default function PCeditiondrop() {
  return (
    <div className="megaNav">
      <div className='container pops'>
        <div className="p-3 pc-config">
          <h6 className="bold mt-3">
            <Link to="/corsair-icue-murals" className="link text-decoration-none">Corsair iCUE Murals</Link>
          </h6>
          <h6 className="bold mt-3">
            <Link to="/pc-pour-jouer" className="link text-decoration-none">PC pour jouer</Link>
          </h6>
          <p className='mt-4'>
            <Link to="/wukong" className="link text-decoration-none">Black Myth: Wukong</Link>
          </p>
          <p>
            <Link to="/pc-editions-speciales/pc-pour-jouer/minecraft/" className="link text-decoration-none">PC Gamer Minecraft</Link>
          </p>
          <p>
            <Link to="/pc-editions-speciales/pc-pour-jouer/fortnite" className="link text-decoration-none">PC Gamer Fortnite</Link>
          </p>
          <p>
            <Link to="/pc-editions-speciales/pc-pour-jouer/counter-strike-2" className="link text-decoration-none">PC Gamer Counter Strike 2</Link>
          </p>
          <strong>
            <p>
              <Link to="/pc-pour-jouer" className="link text-decoration-none">Découvre plus de PC pour jouer</Link>
            </p>
          </strong>

          <h6 className="bold mt-4">
            <Link to="/geforce-rtx-serie" className="link text-decoration-none">PC Gamer GeForce RTX Série</Link>
          </h6>
          <p className='mt-3'>
            <Link to="/nvidia-rtx-40-super" className="link text-decoration-none">GeForce RTX Série 40</Link>
          </p>

          <h6 className="bold mt-4">
            <Link to="/pc-editions-speciales" className="link text-decoration-none">See all PC Editions speciales</Link>
          </h6>
        </div>
      </div>
    </div>
  );
}
