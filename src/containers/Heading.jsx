import React from 'react';

export default ({ eyebrow, title, description, col }) => (
  <div className={`col-lg-${col} mx-auto mb-5 pb-0 text-left text-lg-center`}>
    <span className="eyebrow mb-1 text-primary">{eyebrow}</span>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);
