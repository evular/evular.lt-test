import React from "react";
import { RouteData } from "react-static";
import { Helmet } from "react-helmet";
import Grid from "../containers/Grid";
import CTO from "../containers/CTO";
import About from "../containers/About";
import Services from "../containers/Services";
import Technologies from "../containers/Technologies";
import Form from "../containers/Form";

export default () => (
  <RouteData>
    {({ posts }) => (
      <React.Fragment>
        <Helmet>
          <title>Evular | IT sprendimai</title>
          <meta
            name="Description"
            content="Evular&#8482; yra informacinių technologijų sprendimus teikianti bendrovė. Mes specializuojames internetinių puslapių kūrimo, informacinių sistemų priežiūros, duomenų analitikos ir kt. paslaugose. Didelį dėmesį skiriame naujausių interneto technologijų taikymui ir kibernetiniam saugumui."
          />
          <meta property="og:url" content="https://www.evular.lt/" />
          <meta property="og:title" content="Evular | IT sprendimai" />
          <meta
            property="og:image"
            content="https://images.pexels.com/photos/372098/pexels-photo-372098.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          />
          <meta
            property="og:description"
            content="Evular&#8482; yra informacinių technologijų sprendimus teikianti bendrovė. Mes specializuojames internetinių puslapių kūrimo, informacinių sistemų priežiūros, duomenų analitikos ir kt. paslaugose. Didelį dėmesį skiriame naujausių interneto technologijų taikymui ir kibernetiniam saugumui."
          />
        </Helmet>
        <CTO />
        <Services display="block" page="/#apie-mus" />
        <Grid
          list={posts.slice(0, 3)}
          page="blogas"
          title="Informacinių technologijų sektoriaus naujienos"
          description="Kiekvieną dieną informacinių technologijų pasaulyje atsiranda kažkas naujo. Mes norime suteikti Jums svarbiausias naujienas, patarimus ir įžvalgas, kad į rytojų žengtume kartu."
          eyebrow="Blogas"
        />
        <About />
        <Technologies />
        <Form />
      </React.Fragment>
    )}
  </RouteData>
);
