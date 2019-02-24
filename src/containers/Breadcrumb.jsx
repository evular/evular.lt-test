import React from 'react';

export default ({ image, title, tag, description }) => (
  <section className="bg-white pt-md-5 pb-md-5 pt-5 pb-5">
    <div className="container">
      <div className="row align-items-center justify-content-between gutter-5">
        <div className="col-lg-6">
          <p className="eyebrow mb-1 text-primary">{tag}</p>
          <h2>{title}</h2>
          <p className="">{description}</p>
        </div>
        <div className="col-lg-6">
          <img src={image} className="mb-sm-0  p-0 img-fluid" alt={title} />
        </div>
      </div>
    </div>
  </section>
);
