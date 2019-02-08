import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import '../styles/history.scss';
import '../styles/card.scss';
import '../styles/markdown.scss';

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

  return (
    <StaticQuery
      query={graphql`
        query EmploymentHistoryQuery {
          allMarkdownRemark (
            filter: {
              frontmatter: {
                category: { in: ["jobs", "education"] }
              }
            }
            sort: {
              fields: [frontmatter___endYear]
              order: DESC
            }
          ) {
            edges {
              node {
                frontmatter {
                  title
                  category
                  organisation
                  startYear
                  endYear
                }
                id
                html
              }
            }
          }
        }
      `}
      render={(({ allMarkdownRemark }) => {
        const items = allMarkdownRemark.edges.filter((edge) => {
          // Filter all occupations by category.
          const { frontmatter } = edge.node;
          return frontmatter.category === category;
        }).map((edge) => {
          const { id, html } = edge.node;
          const {
            title,
            organisation,
            startYear,
            endYear,
          } = edge.node.frontmatter;

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

        return items;
      })}
    />
  );
}

OccupationHistory.propTypes = propTypes;

export default OccupationHistory;
