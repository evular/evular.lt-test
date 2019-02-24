import React from "react";
import { RouteData } from "react-static";
import { Helmet } from "react-helmet";
import Page from "../containers/Page";

export default () => (
  <RouteData>
    {({ posts, post }) => (
      <React.Fragment>
        <Helmet>
          <meta name="Description" content={post.data.description} />
          <meta
            property="og:url"
            content={`https://www.evular.lt/blogas/${post.data.slug}`}
          />
          <meta property="og:title" content={post.data.title} />
          <meta property="og:image" content={post.data.thumbnail} />
          <meta
            property="og:description"
            content="EVULAR yra informacinių technologijų sprendimus teikianti bendrovė. Mes specializuojames internetinių puslapių kūrimo, informacinių sistemų priežiūros, duomenų analitikos ir kt. paslaugose. Didelį dėmesį skiriame naujausių interneto technologijų taikymui ir kibernetiniam saugumui."
          />
          <title>{post.data.title}</title>
        </Helmet>
        <Page items={posts} item={post} page="blogas" />
      </React.Fragment>
    )}
  </RouteData>
);
