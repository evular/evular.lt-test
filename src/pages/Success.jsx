import React from "react";
import { Link } from "@reach/router";

export default () => (
  <div className="viewport cto">
    <div className="container" style={{ transform: "scaleX(-1)" }}>
      <div className="row justify-content-center align-items-center vh-100">
        <div className="col-md-6 col-lg-4 text-white text-center">
          <h3>Ačiū, kad su mums parašėte.</h3>
          <p>
            Artimiausiu metu su Jumis susisieksime.{" "}
            <Link className="link" to="/">
              Grįžti atgal.
            </Link>
          </p>
        </div>
      </div>
    </div>
  </div>
);
