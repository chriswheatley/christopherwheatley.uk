import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import '../styles/history.scss';
import '../styles/card.scss';
import '../styles/markdown.scss';

/**
 * Display all job posts in reverse chronological order.
 */
function EmploymentHistory() {
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
                category: { eq: "jobs" }
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
        const employmentItems = allMarkdownRemark.edges.map((edge) => {
          const { id, html } = edge.node;
          const {
            title,
            organisation,
            startYear,
            endYear,
          } = edge.node.frontmatter;

          return (
            <section className="card history-item" key={id}>
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

        return employmentItems;
      })}
    />
  );
}

export default EmploymentHistory;
