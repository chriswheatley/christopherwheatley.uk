import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import '../../styles/history.scss';

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
      render={(({ allMarkdownRemark }) => (
        allMarkdownRemark.edges.map((edge) => {
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
            <section className="history-item" key={id}>
              <div className="history-item__header">
                <h3 className="history-item__heading">{heading}</h3>
                <p className="history-item__dates">{dates}</p>
              </div>
              {/*
                The html inserted here is trusted as it is static content added by gatsby during
                build time.
              */}
              {/* eslint-disable-next-line react/no-danger */}
              <p className="history-item__body" dangerouslySetInnerHTML={{ __html: html }} />
            </section>
          );
        })
      ))}
    />
  );
}

export default EmploymentHistory;
