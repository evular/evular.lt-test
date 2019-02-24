import React from "react";
import { Link } from "@reach/router";
import Socials from "./Socials";

export default () => (
  <footer className="bg-dark text-white separator-top" id="footer">
    <div className="container py-5">
      <div className="row justify-content-between align-items-center">
        <div className="col-lg-3 col-md-4 col-12 mb-md-0">
          <p className="copyright-text">Privatumo politika</p>
        </div>
        <div className="col-lg-6 col-md-4 col-12 mb-md-0">
          <p className="copyright-text">
            Visos teisės saugomos 2016 - 2019 © Interneto ir multimedijos
            projektai, MB
          </p>
        </div>
        <div
          className="col-lg-3 col-md-4 col-12 text-md-right text-left justify-content-md-end justify-content-start"
          style={{
            alignItems: "center",
            alignContent: "center",
            display: "flex"
          }}
        >
          <Link
            title="Paslaugos.lt"
            target="_blank"
            to="https://paslaugos.lt/interneto-ir-multimedijos-projektai-mb-ei313"
            rel="noopener"
          >
            <img
              alt="Paslaugos.lt"
              src="https://paslaugos.lt/l/131117/logo3.png"
              style={{ marginRight: ".625rem" }}
            />
          </Link>
          <Socials margin="-.625rem" color="var(--white)" />
        </div>
      </div>
    </div>
  </footer>
);
