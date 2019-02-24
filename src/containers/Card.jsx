import React from "react";
import { Link } from "@reach/router";
import moment from "moment";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default ({ title, link, thumbnail, tag, date }) => (
  <li className="col-lg-4 col-md-6 col-12 blog-post text-left text-dark">
    <Link to={link}>
      <LazyLoadImage alt={title} effect="blur" src={thumbnail} />
    </Link>
    <Link to={link}>
      <span className="eyebrow mt-1" style={{ color: "rgba(0,0,0, .5)" }}>
        {tag}
      </span>
    </Link>
    <Link to={link}>
      <h4 className="mt-1 mb-1 text-dark">{title}</h4>
    </Link>
    <Link to={link} className="text-dark">
      <u>
        {moment(date)
          .locale("lt")
          .startOf("day")
          .fromNow()}
      </u>
    </Link>
  </li>
);
