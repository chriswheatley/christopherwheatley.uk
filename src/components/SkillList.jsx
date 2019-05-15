import React from 'react';
import useSkills from '../hooks/useSkills';

/**
 * Display all posts in the skills category in a grid where each skill has a title and a
 * description.
 */
function SkillList() {
  const skillItems = useSkills().map((skillItem) => {
    const { id, title, html } = skillItem;

    return (
      <li key={id} className="grid__item card card--primary">
        <span className="card__title">{title}</span>
        {/*
          The html inserted here is trusted as it is static content added by gatsby during
          build time.
        */}
        {/* eslint-disable-next-line react/no-danger */}
        <div className="markdown" dangerouslySetInnerHTML={{ __html: html }} />
      </li>
    );
  });

  return <ul className="grid">{skillItems}</ul>;
}

export default SkillList;
