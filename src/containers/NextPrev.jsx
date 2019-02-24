import React from "react";
import { Link } from "@reach/router";
import Card from "./Card";

export default ({ next, prev, page }) => (
  <section className="pt-lg-10 pb-lg-10 pt-5 pb-5 separator-top hero-pattern">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-12 text-lg-center text-left">
          <h4>Skaitykite toliau:</h4>
        </div>
      </div>
      <div className="row gutter-5 justify-content-center">
        <Card
          link={`/${page}/${prev.data.slug}`}
          title={prev.data.title}
          description={prev.data.description}
          thumbnail={prev.data.thumbnail}
          tag={prev.data.tag}
          size="6"
          key={page + " " + prev.data.title}
          date={prev.data.date}
        />
        <Card
          link={`/${page}/${next.data.slug}`}
          title={next.data.title}
          description={next.data.description}
          tag={next.data.tag}
          thumbnail={next.data.thumbnail}
          size="6"
          key={page + " " + next.data.title}
          date={next.data.date}
        />
      </div>
      <div className="row">
        <div className="col text-lg-center text-left">
          <Link to="/blogas" className="btn btn-outline-primary">
            Visi straipsniai
          </Link>
        </div>
      </div>
    </div>
  </section>
);
