import React from 'react';
import useInterests from '../hooks/useInterests';

/**
 * Display all interest posts in list ordered alphabetically
 */
function InterestList() {
  const interestItems = useInterests().map((interest) => {
    const { id, title, html } = interest;
    return (
      <li className="grid__item card" key={id}>
        <div className="card__header">
          <div className="card__title">{title}</div>
        </div>
        {/*
          The html inserted here is trusted as it is static content added by gatsby during
          build time.
        */}
        {/* eslint-disable-next-line react/no-danger */}
        <div className="markdown" dangerouslySetInnerHTML={{ __html: html }} />
      </li>
    );
  });

  return <ul className="grid">{interestItems}</ul>;
}

export default InterestList;
