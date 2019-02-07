import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import '../styles/history.scss';
import '../styles/card.scss';
import '../styles/markdown.scss';

/**
 * Display all education posts in reverse chronological order.
 */
function EducationHistory() {
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
        query EducationHistoryQuery {
          allMarkdownRemark(
            filter: {
              frontmatter: {
                category: {eq: "education"}
              }
            },
            sort: {
              fields: [frontmatter___endYear],
              order: DESC
            }
          ) {
            edges {
              node {
                frontmatter {
                  title
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
      render={({ allMarkdownRemark }) => {
        const educationItems = allMarkdownRemark.edges.map((edge) => {
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
                <p className="card__subtitle">{getSubtitle(organisation, startYear, endYear)}</p>
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

        return educationItems;
      }}
    />
  );
}

export default EducationHistory;
