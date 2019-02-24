import React from "react";
import { Link } from "@reach/router";

export default () => (
  <section className="pt-lg-10 pb-lg-10 pt-5 pb-5 cto" id="home">
    <div className="container text-white" style={{ transform: "scaleX(-1)" }}>
      <div className="row align-items-center justify-content-between gutter-5">
        <div className="col-12 col-lg-8 text-left text-lg-left order-md-1">
          <h1>Patikėkite savo skaitmeninę ateitį mums</h1>
          <p>
            Evular&#8482; yra informacinių technologijų sprendimus teikianti
            bendrovė. Mes specializuojames internetinių puslapių kūrimo,
            informacinių sistemų priežiūros, duomenų analitikos ir kt.
            paslaugose. Didelį dėmesį skiriame naujausių interneto technologijų
            taikymui ir kibernetiniam saugumui.
          </p>
          <div className="row align-items-baseline pt-2">
            <div className="col">
              <Link className="btn btn-outline-white" to="#kontaktai">
                Susisiekite su mumis
                <svg
                  aria-hidden="true"
                  data-prefix="fas"
                  data-icon="angle-right"
                  className="svg-inline--fa fa-angle-right fa-w-8"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 512"
                  style={{
                    height: "1.25rem",
                    marginLeft: ".625rem",
                    transform: "translateY(-1px)"
                  }}
                >
                  <path
                    fill="currentColor"
                    d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
