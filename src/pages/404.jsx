import React from "react";
import { Link } from "@reach/router";

export default () => (
  <section className="bg-white pt-0 pb-0">
    <div className="container">
      <div className="row justify-content-center align-items-center vh-100">
        <div className="col-md-6 col-lg-4 text-dark text-center">
          <h3>404</h3>
          <p>
            Apgailestaujame, tačiau puslapis, kurio ieškojote, nerastas.{" "}
            <Link className="link" to="/">
              Grįžti atgal.
            </Link>
          </p>
        </div>
      </div>
    </div>
  </section>
);
