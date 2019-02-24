import React from "react";
import { Link } from "@reach/router";

let facebook = "https://www.facebook.com/Evular-421542598583247";
let instagram = "https://www.instagram.com/evular_life/";
let linkedin =
  "https://www.linkedin.com/company/evular-digital-studio/?viewAsMember=true";

export default ({ margin, color }) => (
  <ul className="socials" style={{ marginLeft: margin }}>
    <li className="social-icon">
      <Link
        to={facebook}
        className="icon-facebook fs-20"
        target="_blank"
        style={{ color: color }}
        rel="noopener"
      />
    </li>
    <li className="social-icon">
      <Link
        to={instagram}
        className="icon-instagram fs-20"
        target="_blank"
        style={{ color: color }}
        rel="noopener"
      />
    </li>
    <li className="social-icon">
      <Link
        to={linkedin}
        className="icon-linkedin fs-20"
        target="_blank"
        style={{ color: color }}
        rel="noopener"
      />
    </li>
  </ul>
);
