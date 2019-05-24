import React from 'react';
import PropTypes from 'prop-types';
import useOccupations from '../hooks/useOccupations';

const propTypes = {
  /* The category used to filter all occupations */
  category: PropTypes.string.isRequired,
};

/**
 * Display all occupations filtered by category in reverse chronological order.
 */
function OccupationHistory({ category }) {
  /**
   * Get the subtitle for an item in education history.
   * @param {String} [organisation] Optional. The name of the organisation.
   * @param {Number} startYear  The year when starting at the organisation.
   * @param {Number} endYear    The year when leaving the organisation.
   */
  function getSubtitle(organisation, startYear, endYear) {
    const dates = `${startYear} - ${endYear}`;

    if (!organisation) {
      return dates;
    }

    return `${organisation}, ${dates}`;
  }

  const occupations = useOccupations().filter(occupation => occupation.category === category);
  const occupationNodes = occupations.map((occupation) => {
    const { id, html } = occupation;
    const {
      title,
      organisation,
      startYear,
      endYear,
    } = occupation;

    return (
      <section key={id} className="card history-item">
        <div className="card__header">
          <h3 className="card__title">{title}</h3>
          <div className="card__subtitle">{getSubtitle(organisation, startYear, endYear)}</div>
        </div>
        {/*
            The html inserted here is trusted as it is static content added by gatsby during
            build time.
          */}
        {/* eslint-disable-next-line react/no-danger */}
        <div className="markdown" dangerouslySetInnerHTML={{ __html: html }} />
      </section>
    );
  });

  return occupationNodes;
}

OccupationHistory.propTypes = propTypes;

export default OccupationHistory;
