import React, { Component } from "react";
import { Link } from "@reach/router";
import Logo from "./Logo";
import Socials from "./Socials";

let menu = [
  {
    item: "pagrindinis",
    link: "/"
  },
  {
    item: "paslaugos",
    link: "/#paslaugos"
  },
  {
    item: "apie mus",
    link: "/#apie-mus"
  },
  {
    item: "blogas",
    link: "/blogas"
  },
  {
    item: "kontaktai",
    link: "/#kontaktai"
  }
];

export default class Header extends Component {
  state = {
    clicked: false
  };

  toggleMobile = () => {
    this.setState(({ clicked }) => ({
      clicked: !clicked
    }));
  };

  render() {
    const { clicked } = this.state;
    if (typeof document !== "undefined") {
      if (clicked) {
        document.body.className += "overlay-active";
      } else if (!clicked) {
        document.body.removeAttribute("class");
      }
    }
    return (
      <header
        className="header"
        style={{ top: "0px", background: "rgb(255,255,255, 75%)" }}
      >
        <div className="container" style={{ position: "relative" }}>
          <div
            className="navbar justify-content-between align-content-center bg-transparent"
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              right: "0"
            }}
          >
            <Link
              className={
                clicked
                  ? "navbar-brand white pt-sm-5 pb-sm-5"
                  : "navbar-brand dark pt-sm-5 pb-sm-5"
              }
              to="/"
              style={{ zIndex: "1000", margin: "15px" }}
              onClick={this.state.clicked ? this.toggleMobile : null}
            >
              <Logo
                color={clicked ? "var(--white)" : "var(--dark"}
                size="200"
              />
            </Link>
            <nav className="d-none d-lg-block" style={{ margin: "15px" }}>
              <ul
                className="list-group flex-row align-items-center"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  listStyleType: "none"
                }}
              >
                {menu.map(li => (
                  <li className="nav-item" key={"desktop menu" + li.item}>
                    <Link
                      className="nav-link text-dark text-uppercase eyebrow"
                      to={li.link}
                    >
                      {li.item}
                    </Link>
                  </li>
                ))}
                <li className="nav-item">
                  <Socials color="var(--dark)" />
                </li>
              </ul>
            </nav>
            <button
              type="button"
              onClick={this.toggleMobile}
              onKeyDown={this.toggleMobile}
              className={
                clicked
                  ? "navbar-toggler collapsed pt-sm-5 pb-sm-5 d-block d-lg-none"
                  : "navbar-toggler pt-sm-5 pb-sm-5 d-block d-lg-none"
              }
              style={{
                zIndex: "1000",
                margin: "15px",
                display: "flex",
                alignItems: "center"
              }}
            >
              <span
                className={
                  clicked ? "burger clicked bg-light" : "burger bg-light "
                }
                style={{ borderRadius: "50%" }}
              >
                <span />
              </span>
            </button>
          </div>
        </div>
        <div
          className={
            clicked
              ? "navbar-collapse collapse show bg-dark"
              : "navbar-collapse collapse"
          }
          id="navbarSupportedContent"
        >
          <div className="container">
            <div
              className="row justify-content-between align-content-between"
              style={{ minHeight: "100vh)" }}
            >
              <div
                className={clicked ? "col-12 menu show" : "col-12 menu hide"}
              >
                <ul
                  className="navbar-nav align-items-left text-capitalize mr-auto text-center"
                  id="menu"
                >
                  {menu.map(li => (
                    <li
                      className="nav-item h4 m-0"
                      onClick={this.toggleMobile}
                      key={"mobile menu" + li.item}
                    >
                      <Link className="nav-link text-light" to={li.link}>
                        {li.item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
