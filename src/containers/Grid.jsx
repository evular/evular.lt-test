import React from "react";
import { Link } from "@reach/router";
import Card from "./Card";
import Heading from "./Heading";

export default ({ eyebrow, list, page, title, description }) => (
  <section
    className="text-dark pt-lg-10 pb-lg-10 pt-5 pb-5 separator-top separator-bottom blog-grid hero-pattern"
    id="news"
  >
    <div className="container align-self-center text-center ">
      <div className="row align-content-center mb-5">
        {eyebrow ? (
          <Heading
            eyebrow={eyebrow}
            title={title}
            description={description}
            col="8"
          />
        ) : null}
        <div className="col-md-12 text-center mx-auto">
          <ul className="row gutter-5" style={{ flexDirection: "row" }}>
            {list.reverse().map(item => (
              <Card
                title={item.data.title}
                description={item.data.description}
                thumbnail={item.data.thumbnail}
                link={`/${page}/${item.data.slug}`}
                tag={item.data.tag}
                size="4"
                key={page + " " + item.data.title}
                date={item.data.date}
              />
            ))}
          </ul>
        </div>
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
