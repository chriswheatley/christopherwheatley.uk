import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

/**
 * Display all education posts in reverse chronological order.
 */
function EducationHistory() {
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
            startYear,
            endYear,
          } = edge.node.frontmatter;

          const heading = `${title}`;
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

        return educationItems;
      }}
    />
  );
}

export default EducationHistory;
