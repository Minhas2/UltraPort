import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import ASSET_PATHS from '../../utils/constant';

export default function Footer() {
  const imgURL = ASSET_PATHS.IMG_URL;

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div className='footer-container'>
        <div className="container-fluid footer-section-1">
          <div className="row align-items-center ">
            <div className="col-lg-6 col-md-12 left-image p-0">
              <img src={`../../${imgURL}/newsletter_bg.jpg`} alt="Newsletter Image" className="img-fluid" />
            </div>
            <div className="col-lg-6 col-md-12 text-white">
              <h3>Abonnez-vous à la newsletter</h3>
              <p>Restez informé de nos nouveautés et des promotions en cours avec la newsletter Megaport.</p>
              <form className="newsletter-form">
                <input type="email" className="input" placeholder="Votre adresse électronique" required />
                <button className="btn" type="submit">Inscription</button>
              </form>
            </div>
          </div>
        </div>

        <div className="container-fluid footer-section-2">
          <div className="container">
            <div className="row">
              {/* Shop Section */}
              <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
                <h5 className="footer-title">Notre Boutique</h5>
                <ul className="list-unstyled">
                  <li><Link to="/pc-gamer" onClick={scrollToTop}>PC Gamer</Link></li>
                  <li><Link to="/pc-gamer/pc-premium-gaming/" onClick={scrollToTop}>PC Premium Gaming</Link></li>
                  <li><Link to="/pc-gamer/pc-gamer-complet/" onClick={scrollToTop}>Packs PC tout en un</Link></li>
                  <li><Link to="/promotions" onClick={scrollToTop}>Promotions</Link></li>
                  <li><Link to="/offres" onClick={scrollToTop}>Offres</Link></li>
                </ul>
              </div>
              {/* Information Section */}
              <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
                <h5 className="footer-title">Informations</h5>
                <ul className="list-unstyled">
                  <li><Link to="/les-frais-de-port" onClick={scrollToTop}>Frais de port</Link></li>
                  <li><Link to="/livraison" onClick={scrollToTop}>Livraison</Link></li>
                  <li><Link to="/paiement" onClick={scrollToTop}>Paiement</Link></li>
                  <li><Link to="/ssl" onClick={scrollToTop}>Cryptage SSL</Link></li>
                  <li><Link to="/cookies" onClick={scrollToTop}>Paramètres des cookies</Link></li>
                </ul>
              </div>
              {/* Tips Section */}
              <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
                <h5 className="footer-title">Trucs et Astuces</h5>
                <ul className="list-unstyled">
                  <li><Link to="/configurateur-pc" onClick={scrollToTop}>Configurateur PC</Link></li>
                  <li><Link to="/configurateur-pc/configurer-un-pc-gamer/" onClick={scrollToTop}>Ma config PC gamer</Link></li>
                  <li><Link to="/pc-pour-jouer" onClick={scrollToTop}>PC pour jouer</Link></li>
                  <li><Link to="/comparatif-cartes-graphiques" onClick={scrollToTop}>Comparatif cartes graphiques</Link></li>
                  <li><Link to="/comparatif-processeur" onClick={scrollToTop}>Comparatif processeur</Link></li>
                  <li><Link to="/comparatif-ssd" onClick={scrollToTop}>Comparatif SSD</Link></li>
                </ul>
              </div>
              {/* About Us Section */}
              <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
                <h5 className="footer-title">À propos de nous</h5>
                <ul className="list-unstyled">
                  <li><Link to="/a-propos-de-nous" onClick={scrollToTop}>À propos de nous</Link></li>
                  <li><Link to="/conditions" onClick={scrollToTop}>Conditions générales</Link></li>
                  <li><Link to="/droit-de-retractation" onClick={scrollToTop}>Droit de rétractation</Link></li>
                  <li><Link to="/mentions-legales" onClick={scrollToTop}>Mentions légales</Link></li>
                  <li><Link to="/protection-des-donnees" onClick={scrollToTop}>Protection des données</Link></li>
                </ul>
              </div>
              {/* Customer Service Section */}
              <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
                <h5 className="footer-title">À votre service</h5>
                <ul className="list-unstyled">
                  <li><Link to="/questions-frequentes" onClick={scrollToTop}>Questions fréquentes</Link></li>
                  <li><Link to="/contactez-nous" onClick={scrollToTop}>Contactez-nous</Link></li>
                  <li><Link to="/formulaire-d-assistance" onClick={scrollToTop}>Formulaire de retour</Link></li>
                  <li><Link to="/batteries-usagees" onClick={scrollToTop}>Batteries usagées</Link></li>
                </ul>
              </div>
              {/* Hotline Section */}
              <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
                <h5 className="footer-title">MEGAPORT Hotline</h5>
                <p className="footer-phone">02 49 88 06 17</p>
                <p className="footer-address">Nos conseillers sont à votre écoute au 02 49 88 06 17 (tarif local) du lundi au vendredi, entre 8h–16h.</p>
              </div>
            </div>
            <div><hr /></div>

            {/* Payment Icons and Social Icons here */}
            {/* Similar structure with onClick={scrollToTop} for Links */}
          </div>
        </div>

        {/* Other sections */}
      </div>
    </>
  );
}
