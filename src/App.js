import React from "react";
import { Root, Routes } from "react-static";
import Helmet from "react-helmet";
import Header from "./containers/Header";
import Footer from "./containers/Footer";
import Fonts from "./containers/Fonts";

import "./app.css";

class App extends React.Component {
  componentDidMount() {
    Fonts();
  }
  render() {
    return (
      <Root>
        <Helmet>
          <meta data-react-helmet="true" property="og:type" content="website" />
          <meta name="HandheldFriendly" content="true" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="theme-color" />
          <link rel="canonical" href="https://www.evular.lt" />
        </Helmet>
        <Header />
        <Routes />
        <Footer />
      </Root>
    );
  }
}

export default App;
