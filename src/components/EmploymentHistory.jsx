import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import '../styles/history.scss';
import '../styles/card.scss';
import '../styles/markdown.scss';

/**
 * Display all job posts in reverse chronological order.
 */
function EmploymentHistory() {
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

          const heading = `${title} | ${organisation}`;
          const dates = `${startYear} - ${endYear}`;

          return (
            <section className="card history-item" key={id}>
              <div className="card__header">
                <h3 className="card__heading">{heading}</h3>
                <p className="card__date">{dates}</p>
              </div>
              {/*
                The html inserted here is trusted as it is static content added by gatsby during
                build time.
              */}
              {/* eslint-disable-next-line react/no-danger */}
              <div className="card__body markdown" dangerouslySetInnerHTML={{ __html: html }} />
            </section>
          );
        });

        return employmentItems;
      })}
    />
  );
}

export default EmploymentHistory;
