import React from 'react';
import Article from './Article';
import NextPrev from './NextPrev';

export default ({ item, items, page }) => {
  const getSiblings = item => {
    let idx = 0;
    let found = false;
    for (let i = 0; i < items.length && !found; i++) {
      if (item.data.title == items[i].data.title) {
        idx = i;
        found = true;
      }
    }
    const prevIdx = idx - 1 < 0 ? items.length - 1 : idx - 1;
    const nextIdx = idx + 1 >= items.length ? 0 : idx + 1;
    const rv = {
      prev: items[nextIdx],
      next: items[prevIdx]
    };
    return rv;
  };
  return (
    <Article
      item={item}
      content={item.content}
      title={item.data.title}
      description={item.data.description}
      thumbnail={item.data.thumbnail}
      tag={item.data.tag}
      date={item.data.date}
      slug={item.data.slug}
    >
      <NextPrev next={getSiblings(item).next} prev={getSiblings(item).prev} page={page} />
    </Article>
  );
};
