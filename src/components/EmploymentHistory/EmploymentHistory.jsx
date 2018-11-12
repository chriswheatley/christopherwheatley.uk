import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

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
      render={({ allMarkdownRemark }) => {
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
            <section key={id}>
              <h3>{heading}</h3>
              <p>{dates}</p>
              {/*
                The html inserted here is trusted as it is static content added by gatsby during
                build time.
              */}
              {/* eslint-disable-next-line react/no-danger */}
              <p dangerouslySetInnerHTML={{ __html: html }} />
            </section>
          );
        });

        return (
          <section>
            <h2>Employment</h2>
            {employmentItems}
          </section>
        );
      }}
    />
  );
}

export default EmploymentHistory;
