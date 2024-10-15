import React from "react";
import "./Page13.css";

export default function Page13() {
  return (
    <>
      <div className="container pops py-5">
        <div className="row">
            <div className="col-lg-6">

            <div className="d-flex my-4 font-u flex-wrap">
          <p className="mb-0">
            Accueil <span className="ps-2">&gt;</span>
          </p>
          <p className="ps-2 mb-0">
            Mon compte <span>&gt;</span>
          </p>
          <p className="ps-2 mb-0">
            Réinitialisation du mot de passe <span>&gt;</span>
          </p>
          <p className="ps-2 mb-0">Intel Core I5 </p>
        </div>

        <h2 className="mb-3">Réinitialisation du mot de passe</h2>

        <p className="font-8">
          Insérez votre adresse e-mail pour recevoir un lien de réinitialisation
          du mot de passe.
        </p>

        <div className="form-group mb-3">
          <label htmlFor="exampleInputEmail1 " className="mb-3">E-Mail</label>
          <input
            type="email"
            className="form-control mail-box"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            
          />
        </div>

        <button className="Reinitialiser-btn ">
        Réinitialiser mon mot de passe
                  </button>

            </div>
        </div>

      </div>
    </>
  );
}
